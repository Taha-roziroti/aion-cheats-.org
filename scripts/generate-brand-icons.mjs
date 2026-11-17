import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const source = path.join(publicDir, 'brand', 'favicon-source.png');
const iconSource = source;

/** Matches site chrome (see site.webmanifest theme_color). */
const ICON_BG = { r: 15, g: 15, b: 20, alpha: 1 };

if (!fs.existsSync(iconSource)) {
  console.error('generate-brand-icons: missing source at', iconSource);
  process.exit(1);
}

/** Crop the top portion of the source mark for small favicon sizes. */
const SYMBOL_CROP_HEIGHT_RATIO = 0.72;

async function loadExtractedSymbol() {
  const meta = await sharp(iconSource).metadata();
  const width = meta.width ?? 1;
  const height = meta.height ?? 1;
  /** Wide wordmarks (e.g. AION) — use full art; tall lockups crop to the symbol band. */
  if (width > height * 1.25) {
    return sharp(iconSource);
  }
  const cropHeight = Math.round(height * SYMBOL_CROP_HEIGHT_RATIO);
  return sharp(iconSource).extract({
    left: 0,
    top: 0,
    width,
    height: Math.min(cropHeight, height),
  });
}

function resizeToSquare(input, size) {
  return input
    .clone()
    .resize(size, size, {
      fit: 'contain',
      background: ICON_BG,
    })
    .png();
}

function resizeFull(size) {
  return sharp(iconSource)
    .resize(size, size, {
      fit: 'contain',
      background: ICON_BG,
    })
    .png();
}

const symbol = await loadExtractedSymbol();

await resizeFull(180).toFile(path.join(publicDir, 'apple-touch-icon.png'));
await resizeToSquare(symbol, 32).toFile(path.join(publicDir, 'favicon-32.png'));
await resizeToSquare(symbol, 16).toFile(path.join(publicDir, 'favicon-16.png'));
await resizeToSquare(symbol, 32).toFile(path.join(publicDir, 'favicon.ico'));

const png180 = await resizeToSquare(symbol, 180).toBuffer();
const base64 = png180.toString('base64');
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" role="img" aria-label="AION site logo">
  <rect width="180" height="180" fill="#0f0f14"/>
  <image href="data:image/png;base64,${base64}" width="180" height="180"/>
</svg>
`;
fs.writeFileSync(path.join(publicDir, 'favicon.svg'), faviconSvg, 'utf8');
fs.writeFileSync(path.join(publicDir, 'logo.svg'), faviconSvg, 'utf8');

console.log('Brand icons generated from', path.relative(root, iconSource));