import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

// Mock a lightweight browser environment so site.ts and categories.ts (which imports site.ts) don't crash
(global as any).window = {};

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const BASE_URL = 'https://agalya.github.io/muthupettagam';

// We must dynamically import it so globals take effect first
const generate = async () => {
  const { categories } = await import('../src/data/categories.js');
  
  const indexPath = path.join(DIST_DIR, 'index.html');
  
  if (!fs.existsSync(indexPath)) {
    console.error('dist/index.html not found! Run vite build first.');
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(indexPath, 'utf-8');

  // Helper to replace meta tags in the HTML string
  const injectMeta = (html: string, title: string, description: string, imageAbsUrl: string) => {
    let newHtml = html;
    
    // Replace Title elements
    newHtml = newHtml.replace(/<title>.*?<\/title>/g, `<title>${title}</title>`);
    newHtml = newHtml.replace(/<meta\s+property="og:title"\s+content=".*?"\s*\/>/g, `<meta property="og:title" content="${title}" />`);
    
    // Replace Description
    newHtml = newHtml.replace(/<meta\s+name="description"\s+content=".*?"\s*\/>/g, `<meta name="description" content="${description}" />`);
    newHtml = newHtml.replace(/<meta\s+property="og:description"\s+content=".*?"\s*\/>/g, `<meta property="og:description" content="${description}" />`);
    
    // Replace Image
    newHtml = newHtml.replace(/<meta\s+property="og:image"\s+content=".*?"\s*\/>/g, `<meta property="og:image" content="${imageAbsUrl}" />`);
    newHtml = newHtml.replace(/<meta\s+name="twitter:image"\s+content=".*?"\s*\/>/g, `<meta name="twitter:image" content="${imageAbsUrl}" />`);
    
    return newHtml;
  };

  const getAbsImageUrl = (assetPath?: string) => {
    if (!assetPath) return `${BASE_URL}/muthukumar-og.jpg`; // Default fallback
    
    // If it starts with an alias like @/assets/ or just /images, we need to map it to the raw served path in dist.
    // Our app uses public/images directly usually, so '/images/something.jpg' becomes BASE_URL + '/images/something.jpg'
    // Let's strip any leading slash or specific src formats.
    const cleanPath = assetPath.replace(/^@\/assets\//, '').replace(/^\//, '');
    return `${BASE_URL}/${cleanPath}`;
  };

  let generatedCount = 0;

  // Process all Categories
  for (const category of categories) {
    const categoryTitle = `${category.title} - முத்துக்குமாரின் நினைவகம்`;
    const categoryDesc = category.description ? category.description.replace(/"/g, '&quot;') : '';
    // We'll use the default image for categories unless they had a specific one
    const categoryImage = getAbsImageUrl();

    const categoryHtml = injectMeta(baseHtml, categoryTitle, categoryDesc, categoryImage);
    const categoryDir = path.join(DIST_DIR, 'category', category.id);
    
    fs.ensureDirSync(categoryDir);
    fs.writeFileSync(path.join(categoryDir, 'index.html'), categoryHtml);
    generatedCount++;

    // Process all SubCategories and Items
    if (category.subCategories) {
      for (const sub of category.subCategories) {
        for (const item of sub.items) {
          if (!item) continue;
          const safeItemTitle = item.title || category.title || '';
          const itemTitle = `${safeItemTitle.replace(/"/g, '&quot;')} - ${category.title}`;
          const itemDesc = item.content ? (item.content.substring(0, 150).replace(/"/g, '&quot;') + '...') : categoryDesc;
          const itemImage = item.image ? getAbsImageUrl(item.image) : (sub.image ? getAbsImageUrl(sub.image) : categoryImage);
          
          const itemHtml = injectMeta(baseHtml, itemTitle, itemDesc, itemImage);
          const itemDir = path.join(categoryDir, item.id);
          
          fs.ensureDirSync(itemDir);
          fs.writeFileSync(path.join(itemDir, 'index.html'), itemHtml);
          generatedCount++;
        }
      }
    } else if (category.items) {
      for (const item of category.items) {
        if (!item) continue;
        const safeItemTitle = item.title || category.title || '';
        const itemTitle = `${safeItemTitle.replace(/"/g, '&quot;')} - ${category.title}`;
        const itemDesc = item.content ? (item.content.substring(0, 150).replace(/"/g, '&quot;') + '...') : categoryDesc;
        const itemImage = item.image ? getAbsImageUrl(item.image) : categoryImage;
        
        const itemHtml = injectMeta(baseHtml, itemTitle, itemDesc, itemImage);
        const itemDir = path.join(categoryDir, item.id);
        
        fs.ensureDirSync(itemDir);
        fs.writeFileSync(path.join(itemDir, 'index.html'), itemHtml);
        generatedCount++;
      }
    }
  }

  console.log(`Successfully generated ${generatedCount} localized OG pages!`);
};

generate().catch(console.error);
