import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from "fs";

function uploadArticlePlugin() {
  return {
    name: "upload-article-plugin",
    configureServer(server: any) {
      server.middlewares.use("/api/upload", (req: any, res: any, next: any) => {
        if (req.method === "POST" && req.url === "/") {
          let body = "";
          req.on("data", (chunk: any) => {
            body += chunk.toString();
          });

          req.on("end", () => {
            try {
              const payload = JSON.parse(body);
              const { targetId, newItem, imageBase64, audioBase64 } = payload;

              if (imageBase64 && newItem.image) {
                const base64Data = imageBase64.replace(/^data:image\/[^;]+;base64,/, "");
                const imagePath = path.join(__dirname, "public", newItem.image.replace(/^\\/, ""));
                fs.writeFileSync(imagePath, base64Data, "base64");
              }

              if (audioBase64 && newItem.audioFile) {
                const base64Data = audioBase64.replace(/^data:audio\/[^;]+;base64,/, "");
                const audioPath = path.join(__dirname, "public", newItem.audioFile.replace(/^\\/, ""));
                fs.writeFileSync(audioPath, base64Data, "base64");
              }

              const catPath = path.join(__dirname, "src", "data", "categories.ts");
              const content = fs.readFileSync(catPath, "utf-8");

              const targetRegex = new RegExp(`id:\s*[\"']${targetId}[\"'][\s\S]*?items:\s*\[`);
              const match = targetRegex.exec(content);

              if (!match) {
                res.statusCode = 400;
                res.end(JSON.stringify({ error: "Could not find target ID in categories.ts" }));
                return;
              }

              const insertPos = match.index + match[0].length;

              let openBrackets = 0;
              let arrayEndIndex = -1;
              for (let i = insertPos; i < content.length; i++) {
                if (content[i] === '[') {
                  openBrackets++;
                } else if (content[i] === ']') {
                  if (openBrackets === 0) {
                    arrayEndIndex = i;
                    break;
                  }
                  openBrackets--;
                }
              }

              if (arrayEndIndex === -1) {
                res.statusCode = 500;
                res.end(JSON.stringify({ error: "Could not safely parse categories structure" }));
                return;
              }

              let lastNonWs = "";
              for (let i = arrayEndIndex - 1; i >= insertPos; i--) {
                if (content[i].trim()) {
                  lastNonWs = content[i];
                  break;
                }
              }

              const prefix = (lastNonWs !== "" && lastNonWs !== ",") ? "," : "";

              const newItemString = `${prefix}\n          {\n            id: \"${newItem.id}\",\n            title: ${JSON.stringify(newItem.title)},\n            ${newItem.date ? `date: ${JSON.stringify(newItem.date)},` : ""}\n            ${newItem.image ? `image: \"${newItem.image}\",` : ""}\n            ${newItem.audioFile ? `audioFile: \"${newItem.audioFile}\",` : ""}\n            ${newItem.content ? `content: \`${newItem.content.replace(/`/g, "\\`")}\`,` : ""}\n            ${newItem.englishTranslation ? `englishTranslation: \`${newItem.englishTranslation.replace(/`/g, "\\`")}\`,` : ""}\n          }\n        `;

              const updatedContent = content.slice(0, arrayEndIndex) + newItemString + content.slice(arrayEndIndex);
              fs.writeFileSync(catPath, updatedContent, "utf-8");

              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ success: true }));
            } catch (error: any) {
              console.error("Upload Error:", error);
              res.statusCode = 500;
              res.end(JSON.stringify({ error: error.message }));
            }
          });
        } else {
          next();
        }
      });
    }
  };
}

// Generate settings.js based on environment
function generateSettingsPlugin() {
  return {
    name: "generate-settings-plugin",
    apply: "build",
    generateBundle(options: any) {
      const publicPath = process.env.VITE_PUBLIC_PATH || "/muthupettagam/";
      const settingsContent = `window.APP_CONFIG = {\n  \"environment\": \"${process.env.VITE_ENVIRONMENT || 'production'}\",\n  \"publicPath\": \"${publicPath}\",\n  \"enableUpload\": ${process.env.VITE_ENABLE_UPLOAD === \"true\"},\n  \"enableDownloadAllZip\": ${process.env.VITE_ENABLE_DOWNLOAD_ALL_ZIP === \"true\"},\n  \"enableDownloadCategoryZip\": ${process.env.VITE_ENABLE_DOWNLOAD_CATEGORY_ZIP === \"true\"},\n  \"enableDownloadIndividualPdf\": ${process.env.VITE_ENABLE_DOWNLOAD_INDIVIDUAL_PDF === \"true\"}\n};\n`;

      this.emitFile({
        type: "asset",
        fileName: "settings.js",
        source: settingsContent,
      });
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: process.env.VITE_PUBLIC_PATH || (mode === "production" ? "/muthupettagam/" : "/"),
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  build: {
    chunkSizeWarningLimit: 1500,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    uploadArticlePlugin(),
    generateSettingsPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
}));