// vite.config.ts
import { defineConfig } from "file:///D:/muthu%20malar/muthumalar-2.3/muthupettagam/node_modules/vite/dist/node/index.js";
import react from "file:///D:/muthu%20malar/muthumalar-2.3/muthupettagam/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import { componentTagger } from "file:///D:/muthu%20malar/muthumalar-2.3/muthupettagam/node_modules/lovable-tagger/dist/index.js";
import fs from "fs";
var __vite_injected_original_dirname = "D:\\muthu malar\\muthumalar-2.3\\muthupettagam";
function uploadArticlePlugin() {
  return {
    name: "upload-article-plugin",
    configureServer(server) {
      server.middlewares.use("/api/upload", (req, res, next) => {
        if (req.method === "POST" && req.url === "/") {
          let body = "";
          req.on("data", (chunk) => {
            body += chunk.toString();
          });
          req.on("end", () => {
            try {
              const payload = JSON.parse(body);
              const { targetId, newItem, imageBase64, audioBase64 } = payload;
              if (imageBase64 && newItem.image) {
                const base64Data = imageBase64.replace(/^data:image\/[^;]+;base64,/, "");
                const imagePath = path.join(__vite_injected_original_dirname, "public", newItem.image.replace(/^\\/, ""));
                fs.writeFileSync(imagePath, base64Data, "base64");
              }
              if (audioBase64 && newItem.audioFile) {
                const base64Data = audioBase64.replace(/^data:audio\/[^;]+;base64,/, "");
                const audioPath = path.join(__vite_injected_original_dirname, "public", newItem.audioFile.replace(/^\\/, ""));
                fs.writeFileSync(audioPath, base64Data, "base64");
              }
              const catPath = path.join(__vite_injected_original_dirname, "src", "data", "categories.ts");
              const content = fs.readFileSync(catPath, "utf-8");
              const targetRegex = new RegExp(`id:\\s*["']${targetId}["'][\\s\\S]*?items:\\s*\\[`);
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
                if (content[i] === "[") {
                  openBrackets++;
                } else if (content[i] === "]") {
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
              const prefix = lastNonWs !== "" && lastNonWs !== "," ? "," : "";
              const newItemString = `${prefix}
          {
            id: "${newItem.id}",
            title: ${JSON.stringify(newItem.title)},
            ${newItem.date ? `date: ${JSON.stringify(newItem.date)},` : ""}
            ${newItem.image ? `image: "${newItem.image}",` : ""}
            ${newItem.audioFile ? `audioFile: "${newItem.audioFile}",` : ""}
            ${newItem.content ? `content: \`${newItem.content.replace(/`/g, "\\`")}\`,` : ""}
            ${newItem.englishTranslation ? `englishTranslation: \`${newItem.englishTranslation.replace(/`/g, "\\`")}\`,` : ""}
          }
        `;
              const updatedContent = content.slice(0, arrayEndIndex) + newItemString + content.slice(arrayEndIndex);
              fs.writeFileSync(catPath, updatedContent, "utf-8");
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ success: true }));
            } catch (error) {
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
function generateSettingsPlugin() {
  return {
    name: "generate-settings-plugin",
    apply: "build",
    generateBundle(options) {
      const publicPath = process.env.VITE_PUBLIC_PATH || "/muthupettagam/";
      const environment = process.env.VITE_ENVIRONMENT || "production";
      const enableUpload = process.env.VITE_ENABLE_UPLOAD === "true";
      const enableDownloadAllZip = process.env.VITE_ENABLE_DOWNLOAD_ALL_ZIP === "true";
      const enableDownloadCategoryZip = process.env.VITE_ENABLE_DOWNLOAD_CATEGORY_ZIP === "true";
      const enableDownloadIndividualPdf = process.env.VITE_ENABLE_DOWNLOAD_INDIVIDUAL_PDF === "true";
      const settingsContent = `window.APP_CONFIG = {
  environment: "${environment}",
  publicPath: "${publicPath}",
  enableUpload: ${enableUpload},
  enableDownloadAllZip: ${enableDownloadAllZip},
  enableDownloadCategoryZip: ${enableDownloadCategoryZip},
  enableDownloadIndividualPdf: ${enableDownloadIndividualPdf}
};`;
      this.emitFile({
        type: "asset",
        fileName: "settings.js",
        source: settingsContent
      });
    }
  };
}
var vite_config_default = defineConfig(({ mode }) => ({
  base: process.env.VITE_PUBLIC_PATH || (mode === "production" ? "/muthupettagam/" : "/"),
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false
    }
  },
  build: {
    chunkSizeWarningLimit: 1500
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    uploadArticlePlugin(),
    generateSettingsPlugin()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"]
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxtdXRodSBtYWxhclxcXFxtdXRodW1hbGFyLTIuM1xcXFxtdXRodXBldHRhZ2FtXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxtdXRodSBtYWxhclxcXFxtdXRodW1hbGFyLTIuM1xcXFxtdXRodXBldHRhZ2FtXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9tdXRodSUyMG1hbGFyL211dGh1bWFsYXItMi4zL211dGh1cGV0dGFnYW0vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcsIFBsdWdpbiB9IGZyb20gXCJ2aXRlXCI7XHJcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCI7XHJcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCB7IGNvbXBvbmVudFRhZ2dlciB9IGZyb20gXCJsb3ZhYmxlLXRhZ2dlclwiO1xyXG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XHJcblxyXG5mdW5jdGlvbiB1cGxvYWRBcnRpY2xlUGx1Z2luKCk6IFBsdWdpbiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWU6IFwidXBsb2FkLWFydGljbGUtcGx1Z2luXCIsXHJcbiAgICBjb25maWd1cmVTZXJ2ZXIoc2VydmVyOiBhbnkpIHtcclxuICAgICAgc2VydmVyLm1pZGRsZXdhcmVzLnVzZShcIi9hcGkvdXBsb2FkXCIsIChyZXE6IGFueSwgcmVzOiBhbnksIG5leHQ6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIiAmJiByZXEudXJsID09PSBcIi9cIikge1xyXG4gICAgICAgICAgbGV0IGJvZHkgPSBcIlwiO1xyXG4gICAgICAgICAgcmVxLm9uKFwiZGF0YVwiLCAoY2h1bms6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBib2R5ICs9IGNodW5rLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICByZXEub24oXCJlbmRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHBheWxvYWQgPSBKU09OLnBhcnNlKGJvZHkpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHsgdGFyZ2V0SWQsIG5ld0l0ZW0sIGltYWdlQmFzZTY0LCBhdWRpb0Jhc2U2NCB9ID0gcGF5bG9hZDtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKGltYWdlQmFzZTY0ICYmIG5ld0l0ZW0uaW1hZ2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJhc2U2NERhdGEgPSBpbWFnZUJhc2U2NC5yZXBsYWNlKC9eZGF0YTppbWFnZVxcL1teO10rO2Jhc2U2NCwvLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlUGF0aCA9IHBhdGguam9pbihfX2Rpcm5hbWUsIFwicHVibGljXCIsIG5ld0l0ZW0uaW1hZ2UucmVwbGFjZSgvXlxcXFwvLCBcIlwiKSk7XHJcbiAgICAgICAgICAgICAgICBmcy53cml0ZUZpbGVTeW5jKGltYWdlUGF0aCwgYmFzZTY0RGF0YSwgXCJiYXNlNjRcIik7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBpZiAoYXVkaW9CYXNlNjQgJiYgbmV3SXRlbS5hdWRpb0ZpbGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJhc2U2NERhdGEgPSBhdWRpb0Jhc2U2NC5yZXBsYWNlKC9eZGF0YTphdWRpb1xcL1teO10rO2Jhc2U2NCwvLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGF1ZGlvUGF0aCA9IHBhdGguam9pbihfX2Rpcm5hbWUsIFwicHVibGljXCIsIG5ld0l0ZW0uYXVkaW9GaWxlLnJlcGxhY2UoL15cXFxcLywgXCJcIikpO1xyXG4gICAgICAgICAgICAgICAgZnMud3JpdGVGaWxlU3luYyhhdWRpb1BhdGgsIGJhc2U2NERhdGEsIFwiYmFzZTY0XCIpO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgY29uc3QgY2F0UGF0aCA9IHBhdGguam9pbihfX2Rpcm5hbWUsIFwic3JjXCIsIFwiZGF0YVwiLCBcImNhdGVnb3JpZXMudHNcIik7XHJcbiAgICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGZzLnJlYWRGaWxlU3luYyhjYXRQYXRoLCBcInV0Zi04XCIpO1xyXG5cclxuICAgICAgICAgICAgICBjb25zdCB0YXJnZXRSZWdleCA9IG5ldyBSZWdFeHAoYGlkOlxcXFxzKltcIiddJHt0YXJnZXRJZH1bXCInXVtcXFxcc1xcXFxTXSo/aXRlbXM6XFxcXHMqXFxcXFtgKTtcclxuICAgICAgICAgICAgICBjb25zdCBtYXRjaCA9IHRhcmdldFJlZ2V4LmV4ZWMoY29udGVudCk7XHJcblxyXG4gICAgICAgICAgICAgIGlmICghbWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNDAwO1xyXG4gICAgICAgICAgICAgICAgcmVzLmVuZChKU09OLnN0cmluZ2lmeSh7IGVycm9yOiBcIkNvdWxkIG5vdCBmaW5kIHRhcmdldCBJRCBpbiBjYXRlZ29yaWVzLnRzXCIgfSkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgY29uc3QgaW5zZXJ0UG9zID0gbWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAgIGxldCBvcGVuQnJhY2tldHMgPSAwO1xyXG4gICAgICAgICAgICAgIGxldCBhcnJheUVuZEluZGV4ID0gLTE7XHJcbiAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGluc2VydFBvczsgaSA8IGNvbnRlbnQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChjb250ZW50W2ldID09PSAnWycpIHtcclxuICAgICAgICAgICAgICAgICAgb3BlbkJyYWNrZXRzKys7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbnRlbnRbaV0gPT09ICddJykge1xyXG4gICAgICAgICAgICAgICAgICBpZiAob3BlbkJyYWNrZXRzID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJyYXlFbmRJbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgb3BlbkJyYWNrZXRzLS07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBpZiAoYXJyYXlFbmRJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNTAwO1xyXG4gICAgICAgICAgICAgICAgcmVzLmVuZChKU09OLnN0cmluZ2lmeSh7IGVycm9yOiBcIkNvdWxkIG5vdCBzYWZlbHkgcGFyc2UgY2F0ZWdvcmllcyBzdHJ1Y3R1cmVcIiB9KSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBsZXQgbGFzdE5vbldzID0gXCJcIjtcclxuICAgICAgICAgICAgICBmb3IgKGxldCBpID0gYXJyYXlFbmRJbmRleCAtIDE7IGkgPj0gaW5zZXJ0UG9zOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgIGlmIChjb250ZW50W2ldLnRyaW0oKSkge1xyXG4gICAgICAgICAgICAgICAgICBsYXN0Tm9uV3MgPSBjb250ZW50W2ldO1xyXG4gICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGNvbnN0IHByZWZpeCA9IChsYXN0Tm9uV3MgIT09IFwiXCIgJiYgbGFzdE5vbldzICE9PSBcIixcIikgPyBcIixcIiA6IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgIC8vIEJ1aWxkIHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG5ldyBpdGVtXHJcbiAgICAgICAgICAgICAgY29uc3QgbmV3SXRlbVN0cmluZyA9IGAke3ByZWZpeH1cXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogXCIke25ld0l0ZW0uaWR9XCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiAke0pTT04uc3RyaW5naWZ5KG5ld0l0ZW0udGl0bGUpfSxcclxuICAgICAgICAgICAgJHtuZXdJdGVtLmRhdGUgPyBgZGF0ZTogJHtKU09OLnN0cmluZ2lmeShuZXdJdGVtLmRhdGUpfSxgIDogXCJcIn1cclxuICAgICAgICAgICAgJHtuZXdJdGVtLmltYWdlID8gYGltYWdlOiBcIiR7bmV3SXRlbS5pbWFnZX1cIixgIDogXCJcIn1cclxuICAgICAgICAgICAgJHtuZXdJdGVtLmF1ZGlvRmlsZSA/IGBhdWRpb0ZpbGU6IFwiJHtuZXdJdGVtLmF1ZGlvRmlsZX1cIixgIDogXCJcIn1cclxuICAgICAgICAgICAgJHtuZXdJdGVtLmNvbnRlbnQgPyBgY29udGVudDogXFxgJHtuZXdJdGVtLmNvbnRlbnQucmVwbGFjZSgvYC9nLCBcIlxcXFxgXCIpfVxcYCxgIDogXCJcIn1cclxuICAgICAgICAgICAgJHtuZXdJdGVtLmVuZ2xpc2hUcmFuc2xhdGlvbiA/IGBlbmdsaXNoVHJhbnNsYXRpb246IFxcYCR7bmV3SXRlbS5lbmdsaXNoVHJhbnNsYXRpb24ucmVwbGFjZSgvYC9nLCBcIlxcXFxgXCIpfVxcYCxgIDogXCJcIn1cclxuICAgICAgICAgIH1cXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRDb250ZW50ID0gY29udGVudC5zbGljZSgwLCBhcnJheUVuZEluZGV4KSArIG5ld0l0ZW1TdHJpbmcgKyBjb250ZW50LnNsaWNlKGFycmF5RW5kSW5kZXgpO1xyXG4gICAgICAgICAgICAgIGZzLndyaXRlRmlsZVN5bmMoY2F0UGF0aCwgdXBkYXRlZENvbnRlbnQsIFwidXRmLThcIik7XHJcblxyXG4gICAgICAgICAgICAgIHJlcy5zZXRIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgICAgICAgIHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkoeyBzdWNjZXNzOiB0cnVlIH0pKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJVcGxvYWQgRXJyb3I6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDUwMDtcclxuICAgICAgICAgICAgICByZXMuZW5kKEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbmV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBHZW5lcmF0ZSBzZXR0aW5ncy5qcyBiYXNlZCBvbiBlbnZpcm9ubWVudFxyXG5mdW5jdGlvbiBnZW5lcmF0ZVNldHRpbmdzUGx1Z2luKCk6IFBsdWdpbiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWU6IFwiZ2VuZXJhdGUtc2V0dGluZ3MtcGx1Z2luXCIsXHJcbiAgICBhcHBseTogXCJidWlsZFwiLFxyXG4gICAgZ2VuZXJhdGVCdW5kbGUob3B0aW9uczogYW55KSB7XHJcbiAgICAgIGNvbnN0IHB1YmxpY1BhdGggPSBwcm9jZXNzLmVudi5WSVRFX1BVQkxJQ19QQVRIIHx8IFwiL211dGh1cGV0dGFnYW0vXCI7XHJcbiAgICAgIGNvbnN0IGVudmlyb25tZW50ID0gcHJvY2Vzcy5lbnYuVklURV9FTlZJUk9OTUVOVCB8fCBcInByb2R1Y3Rpb25cIjtcclxuICAgICAgY29uc3QgZW5hYmxlVXBsb2FkID0gcHJvY2Vzcy5lbnYuVklURV9FTkFCTEVfVVBMT0FEID09PSBcInRydWVcIjtcclxuICAgICAgY29uc3QgZW5hYmxlRG93bmxvYWRBbGxaaXAgPSBwcm9jZXNzLmVudi5WSVRFX0VOQUJMRV9ET1dOTE9BRF9BTExfWklQID09PSBcInRydWVcIjtcclxuICAgICAgY29uc3QgZW5hYmxlRG93bmxvYWRDYXRlZ29yeVppcCA9IHByb2Nlc3MuZW52LlZJVEVfRU5BQkxFX0RPV05MT0FEX0NBVEVHT1JZX1pJUCA9PT0gXCJ0cnVlXCI7XHJcbiAgICAgIGNvbnN0IGVuYWJsZURvd25sb2FkSW5kaXZpZHVhbFBkZiA9IHByb2Nlc3MuZW52LlZJVEVfRU5BQkxFX0RPV05MT0FEX0lORElWSURVQUxfUERGID09PSBcInRydWVcIjtcclxuXHJcbiAgICAgIGNvbnN0IHNldHRpbmdzQ29udGVudCA9IGB3aW5kb3cuQVBQX0NPTkZJRyA9IHtcclxuICBlbnZpcm9ubWVudDogXCIke2Vudmlyb25tZW50fVwiLFxyXG4gIHB1YmxpY1BhdGg6IFwiJHtwdWJsaWNQYXRofVwiLFxyXG4gIGVuYWJsZVVwbG9hZDogJHtlbmFibGVVcGxvYWR9LFxyXG4gIGVuYWJsZURvd25sb2FkQWxsWmlwOiAke2VuYWJsZURvd25sb2FkQWxsWmlwfSxcclxuICBlbmFibGVEb3dubG9hZENhdGVnb3J5WmlwOiAke2VuYWJsZURvd25sb2FkQ2F0ZWdvcnlaaXB9LFxyXG4gIGVuYWJsZURvd25sb2FkSW5kaXZpZHVhbFBkZjogJHtlbmFibGVEb3dubG9hZEluZGl2aWR1YWxQZGZ9XHJcbn07YDtcclxuXHJcbiAgICAgIHRoaXMuZW1pdEZpbGUoe1xyXG4gICAgICAgIHR5cGU6IFwiYXNzZXRcIixcclxuICAgICAgICBmaWxlTmFtZTogXCJzZXR0aW5ncy5qc1wiLFxyXG4gICAgICAgIHNvdXJjZTogc2V0dGluZ3NDb250ZW50LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiAoe1xyXG4gIGJhc2U6IHByb2Nlc3MuZW52LlZJVEVfUFVCTElDX1BBVEggfHwgKG1vZGUgPT09IFwicHJvZHVjdGlvblwiID8gXCIvbXV0aHVwZXR0YWdhbS9cIiA6IFwiL1wiKSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIGhvc3Q6IFwiOjpcIixcclxuICAgIHBvcnQ6IDgwODAsXHJcbiAgICBobXI6IHtcclxuICAgICAgb3ZlcmxheTogZmFsc2UsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogMTUwMCxcclxuICB9LFxyXG4gIHBsdWdpbnM6IFtcclxuICAgIHJlYWN0KCksXHJcbiAgICBtb2RlID09PSBcImRldmVsb3BtZW50XCIgJiYgY29tcG9uZW50VGFnZ2VyKCksXHJcbiAgICB1cGxvYWRBcnRpY2xlUGx1Z2luKCksXHJcbiAgICBnZW5lcmF0ZVNldHRpbmdzUGx1Z2luKCksXHJcbiAgXS5maWx0ZXIoQm9vbGVhbiksXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXHJcbiAgICB9LFxyXG4gICAgZGVkdXBlOiBbXCJyZWFjdFwiLCBcInJlYWN0LWRvbVwiLCBcInJlYWN0L2pzeC1ydW50aW1lXCIsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCJdLFxyXG4gIH0sXHJcbn0pKTsiXSwKICAibWFwcGluZ3MiOiAiO0FBQTZULFNBQVMsb0JBQTRCO0FBQ2xXLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFDakIsU0FBUyx1QkFBdUI7QUFDaEMsT0FBTyxRQUFRO0FBSmYsSUFBTSxtQ0FB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
