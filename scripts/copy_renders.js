const fs = require('fs');
const path = require('path');

const srcBase = '/Users/techsonanceinfotech/Documents/codebase/om-interiors/ALL RENDER';
const destBase = '/Users/techsonanceinfotech/Documents/codebase/om-interiors/public/images/renders';
const libDest = '/Users/techsonanceinfotech/Documents/codebase/om-interiors/lib/galleryData.ts';

if (!fs.existsSync(destBase)) {
  fs.mkdirSync(destBase, { recursive: true });
}

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);
  files.forEach(file => {
    if (file.startsWith('.')) return;
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, arrayOfFiles);
    } else {
      if (/\.(jpg|jpeg|png|webp)$/i.test(file)) {
        arrayOfFiles.push(fullPath);
      }
    }
  });
  return arrayOfFiles;
}

const allFiles = getAllFiles(srcBase);
const galleryItems = [];

let counter = 1;

allFiles.forEach((file) => {
  const relPath = path.relative(srcBase, file);
  const parts = relPath.split(path.sep);
  const topFolder = parts[0].toUpperCase();
  
  let category = 'interior';
  let subCategory = 'Living & Bedroom';

  if (topFolder.includes('EXTERIOR') || topFolder.includes('HEIGH RISE')) {
    category = 'exterior';
    subCategory = topFolder.includes('HEIGH RISE') ? 'High Rise Architecture' : 'Exterior Design';
  } else if (topFolder.includes('OFFICE')) {
    category = 'interior';
    subCategory = 'Office & Commercial';
  } else if (topFolder.includes('BALCONY')) {
    category = 'interior';
    subCategory = 'Balcony & Outdoor';
  } else if (topFolder.includes('BEDROOM')) {
    category = 'interior';
    subCategory = 'Bedroom Interior';
  } else if (topFolder.includes('LIVING')) {
    category = 'interior';
    subCategory = 'Living & Kitchen';
  }

  const ext = path.extname(file).toLowerCase();
  const cleanExt = ext === '.jpeg' ? '.jpg' : ext;
  const fileName = `render_${String(counter).padStart(3, '0')}${cleanExt}`;
  const destPath = path.join(destBase, fileName);

  fs.copyFileSync(file, destPath);

  const title = path.basename(file, ext)
    .replace(/[_-]/g, ' ')
    .replace(/CAM\d+/gi, '')
    .replace(/Interactive LightMix View\d+/gi, '')
    .replace(/WhatsApp Image.*/gi, 'Custom Render')
    .trim() || `${subCategory} #${counter}`;

  galleryItems.push({
    id: `render-${counter}`,
    src: `/images/renders/${fileName}`,
    title: title.length > 30 ? title.substring(0, 30) + '...' : title,
    category: category, // "interior" or "exterior"
    subCategory: subCategory,
    originalFolder: topFolder
  });

  counter++;
});

const fileContent = `export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: 'interior' | 'exterior';
  subCategory: string;
  originalFolder: string;
}

export const galleryData: GalleryItem[] = ${JSON.stringify(galleryItems, null, 2)};
`;

fs.writeFileSync(libDest, fileContent, 'utf8');
console.log(`Successfully copied ${galleryItems.length} images to ${destBase} and generated galleryData.ts`);
