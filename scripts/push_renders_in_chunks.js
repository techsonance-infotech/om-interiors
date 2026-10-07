const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const rendersDir = path.join(__dirname, '../public/images/renders');
if (!fs.existsSync(rendersDir)) {
  console.log('Renders directory not found.');
  process.exit(0);
}

const files = fs.readdirSync(rendersDir).filter(f => !f.startsWith('.')).sort();
console.log(`Total render files to push: ${files.length}`);

const batchSize = 30;
for (let i = 0; i < files.length; i += batchSize) {
  const chunk = files.slice(i, i + batchSize);
  const startNum = i + 1;
  const endNum = Math.min(i + batchSize, files.length);
  console.log(`\n--- Batch ${startNum} to ${endNum} of ${files.length} ---`);
  
  for (const file of chunk) {
    execSync(`git add "public/images/renders/${file}"`);
  }
  
  try {
    execSync(`git commit -m "assets: add render images batch ${startNum}-${endNum}"`);
    console.log(`Commit created for batch ${startNum}-${endNum}. Pushing to origin main...`);
    execSync(`git push origin main`, { stdio: 'inherit' });
    console.log(`✓ Batch ${startNum}-${endNum} pushed successfully!`);
  } catch (err) {
    console.error(`Failed on batch ${startNum}-${endNum}:`, err.message);
    process.exit(1);
  }
}

console.log('\n🎉 All render image batches pushed successfully!');
