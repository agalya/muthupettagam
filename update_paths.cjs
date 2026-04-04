const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'categories.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Replace image paths
content = content.replace(/image:\s*"(.*?)"/g, (match, p1) => {
    if (!p1) return match; // Empty string
    if (p1.startsWith('images/')) return match; // Already updated
    // Strip leading slash if present
    const cleanPath = p1.startsWith('/') ? p1.slice(1) : p1;
    return `image: "images/${cleanPath}"`;
});

// Replace audioFile paths
content = content.replace(/audioFile:\s*"(.*?)"/g, (match, p1) => {
    if (!p1) return match; // Empty string
    if (p1.startsWith('audio/')) return match; // Already updated
    const cleanPath = p1.startsWith('/') ? p1.slice(1) : p1;
    return `audioFile: "audio/${cleanPath}"`;
});

// Replace englishAudioFile paths
content = content.replace(/englishAudioFile:\s*"(.*?)"/g, (match, p1) => {
    if (!p1) return match; // Empty string
    if (p1.startsWith('audio/')) return match; // Already updated
    const cleanPath = p1.startsWith('/') ? p1.slice(1) : p1;
    return `englishAudioFile: "audio/${cleanPath}"`;
});

fs.writeFileSync(filePath, content, 'utf8');
console.log("Updated categories.ts");
