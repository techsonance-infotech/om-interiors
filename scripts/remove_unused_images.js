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

// 1. Remove orphaned .html files in public/images
const htmlFiles = getAllFiles(publicImagesDir).filter((file) => file.endsWith('.html'));
console.log(`Found ${htmlFiles.length} orphaned .html files in public/images. Removing...`);
let removedHtmlCount = 0;
htmlFiles.forEach((file) => {
  try {
    fs.unlinkSync(file);
    removedHtmlCount++;
  } catch (e) {}
});
console.log(`Removed ${removedHtmlCount} orphaned .html files.`);

// 2. Gather source text
let allSourceText = "";
sourceDirs.forEach((dir) => {
  const files = getAllFiles(dir);
  files.forEach((filePath) => {
    if (/\.(tsx|ts|jsx|js|css|json|html|md)$/i.test(filePath)) {
      try {
        allSourceText += "\n" + fs.readFileSync(filePath, 'utf8');
      } catch (e) {}
    }
  });
});

// 3. Scan images
const imageFiles = getAllFiles(publicImagesDir).filter((file) =>
  /\.(jpg|jpeg|png|webp|gif|svg|ico)$/i.test(file)
);

const unusedImages = [];
let totalFreedBytes = 0;

imageFiles.forEach((imgPath) => {
  const relPath = path.relative(path.join(process.cwd(), 'public'), imgPath);
  const fileName = path.basename(imgPath);
  const webPath = "/" + relPath.replace(/\\/g, "/");

  const isReferenced =
    allSourceText.includes(fileName) ||
    allSourceText.includes(webPath) ||
    allSourceText.includes(relPath);

  if (!isReferenced) {
    const stats = fs.statSync(imgPath);
    totalFreedBytes += stats.size;
    unusedImages.push(imgPath);
    try {
      fs.unlinkSync(imgPath);
      console.log(`Deleted unused image: ${webPath}`);
    } catch (e) {}
  }
});

console.log(`\nCleanup Complete!`);
console.log(`- Unused images deleted: ${unusedImages.length}`);
console.log(`- Disk space freed: ${(totalFreedBytes / (1024 * 1024)).toFixed(2)} MB`);
