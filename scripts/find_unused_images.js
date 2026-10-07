const fs = require('fs');
const path = require('path');

const publicImagesDir = path.join(process.cwd(), 'public', 'images');
const sourceDirs = [
  path.join(process.cwd(), 'app'),
  path.join(process.cwd(), 'components'),
  path.join(process.cwd(), 'lib'),
  path.join(process.cwd(), 'public', 'js'),
  path.join(process.cwd(), 'public', 'css')
];

// Helper to get all files in a directory recursively
function getAllFiles(dirPath, arrayOfFiles = []) {
  if (!fs.existsSync(dirPath)) return arrayOfFiles;
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

// 1. Gather all source file contents into one large string buffer
console.log("Reading source files...");
let allSourceText = "";
sourceDirs.forEach((dir) => {
  const files = getAllFiles(dir);
  files.forEach((filePath) => {
    // Only read code, markup, css, js, json, ts, tsx files
    if (/\.(tsx|ts|jsx|js|css|json|html|md)$/i.test(filePath)) {
      try {
        allSourceText += "\n" + fs.readFileSync(filePath, 'utf8');
      } catch (e) {}
    }
  });
});

console.log(`Aggregated source text length: ${allSourceText.length} characters.`);

// 2. Gather all image files in public/images
const imageFiles = getAllFiles(publicImagesDir).filter((file) =>
  /\.(jpg|jpeg|png|webp|gif|svg|ico)$/i.test(file)
);

console.log(`Total image files found in public/images: ${imageFiles.length}`);

// 3. Check usage for each image
const unusedImages = [];
const usedImages = [];
let totalUnusedSize = 0;

imageFiles.forEach((imgPath) => {
  const relPath = path.relative(path.join(process.cwd(), 'public'), imgPath); // e.g. images/renders/render_001.jpg
  const fileName = path.basename(imgPath); // e.g. render_001.jpg
  const webPath = "/" + relPath.replace(/\\/g, "/"); // e.g. /images/renders/render_001.jpg

  // Check if filename or webPath or relPath is referenced in source text
  const isReferenced =
    allSourceText.includes(fileName) ||
    allSourceText.includes(webPath) ||
    allSourceText.includes(relPath);

  if (!isReferenced) {
    const stats = fs.statSync(imgPath);
    totalUnusedSize += stats.size;
    unusedImages.push({
      fullPath: imgPath,
      relPath: webPath,
      sizeMB: (stats.size / (1024 * 1024)).toFixed(2)
    });
  } else {
    usedImages.push(webPath);
  }
});

console.log(`\nResults:`);
console.log(`- Used images: ${usedImages.length}`);
console.log(`- Unused images: ${unusedImages.length}`);
console.log(`- Total unused size: ${(totalUnusedSize / (1024 * 1024)).toFixed(2)} MB`);

if (unusedImages.length > 0) {
  console.log(`\nSample unused images:`);
  unusedImages.slice(0, 20).forEach((img) => console.log(`  ${img.relPath} (${img.sizeMB} MB)`));
}
