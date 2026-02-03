import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join, basename } from 'path';

const PUBLIC_DIR = './public';
const OUTPUT_DIR = './public';

// Konfiguracja optymalizacji
const config = {
  // Jasność i kontrast
  brightness: 1.05,      // 1.0 = bez zmian, >1 = jaśniej
  contrast: 1.1,         // 1.0 = bez zmian, >1 = więcej kontrastu
  saturation: 1.15,      // 1.0 = bez zmian, >1 = bardziej nasycone

  // Wyostrzanie
  sharpen: {
    sigma: 1,            // Siła wyostrzania
    m1: 1,               // Flat areas
    m2: 2,               // Jagged areas
  },

  // Jakość wyjściowa
  quality: 85,           // 1-100
};

async function optimizeImage(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      // Modulate: brightness, saturation, hue
      .modulate({
        brightness: config.brightness,
        saturation: config.saturation,
      })
      // Linear dla kontrastu: output = input * contrast + brightness_offset
      .linear(config.contrast, -(128 * config.contrast - 128))
      // Wyostrzanie
      .sharpen(config.sharpen.sigma, config.sharpen.m1, config.sharpen.m2)
      // Zapisz jako JPEG z odpowiednią jakością
      .jpeg({ quality: config.quality, mozjpeg: true })
      .toFile(outputPath);

    console.log(`✓ Optimized: ${basename(inputPath)} → ${basename(outputPath)}`);
  } catch (error) {
    console.error(`✗ Error processing ${inputPath}:`, error.message);
  }
}

async function main() {
  console.log('🎨 Image Optimization Script');
  console.log('============================');
  console.log(`Brightness: ${config.brightness}x`);
  console.log(`Contrast: ${config.contrast}x`);
  console.log(`Saturation: ${config.saturation}x`);
  console.log(`Sharpen: sigma=${config.sharpen.sigma}`);
  console.log(`Quality: ${config.quality}%`);
  console.log('');

  // Znajdź pliki malcer-*.jpg
  const files = await readdir(PUBLIC_DIR);
  const malcerFiles = files.filter(f => f.startsWith('malcer-') && f.endsWith('.jpg'));

  if (malcerFiles.length === 0) {
    console.log('No malcer-*.jpg files found in public/');
    return;
  }

  console.log(`Found ${malcerFiles.length} images to optimize:`);

  for (const file of malcerFiles) {
    const inputPath = join(PUBLIC_DIR, file);
    const outputName = file.replace('.jpg', '-opt.jpg');
    const outputPath = join(OUTPUT_DIR, outputName);

    await optimizeImage(inputPath, outputPath);
  }

  console.log('');
  console.log('✅ Done! Optimized images saved with -opt suffix.');
  console.log('Review them and rename to replace originals if satisfied.');
}

main();
