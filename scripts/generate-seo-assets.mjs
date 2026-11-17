import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const ogDir = path.join(root, 'public', 'og');
const source =
  path.join(root, 'public', 'images', 'placeholder.svg');
const fallback = path.join(root, 'public', 'brand', 'favicon-source.png');

const outputs = [
  'default.jpg',
  'home.jpg',
  'pricing.jpg',
  'cloud-dma.jpg',
  'cloud-dma-setup.jpg',
  'requirements.jpg',
  'faq.jpg',
];

const input = fs.existsSync(source) ? source : fallback;
if (!fs.existsSync(input)) {
  console.error('generate-seo-assets: missing placeholder at', source, 'or', fallback);
  process.exit(1);
}

fs.mkdirSync(ogDir, { recursive: true });

for (const file of outputs) {
  const out = path.join(ogDir, file);
  await sharp(input)
    .resize(1200, 630, { fit: 'cover', position: 'centre' })
    .jpeg({ quality: 85, mozjpeg: true })
    .toFile(out);
  console.log(`Wrote ${path.relative(root, out)}`);
}

console.log('SEO OG assets complete.');