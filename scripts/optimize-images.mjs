/**
 * Convert images in public/images to optimized WebP.
 * Usage: node scripts/optimize-images.mjs [input.png ...]
 * If no args, converts all png/jpg in public/images.
 */
import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const dir = 'public/images'

const maxWidthFor = (name) => {
  if (name.startsWith('hero')) return 1800
  if (name.startsWith('about') || name.startsWith('sustain')) return 1200
  if (name.startsWith('gal')) return 1000
  return 900
}

const inputs = process.argv.slice(2)
const files =
  inputs.length > 0
    ? inputs.map((f) => path.basename(f))
    : fs.readdirSync(dir).filter((f) => /\.(png|jpe?g)$/i.test(f))

if (!files.length) {
  console.log('No png/jpg sources found. Place originals in public/images and re-run.')
  process.exit(0)
}

for (const file of files) {
  const input = path.join(dir, file)
  if (!fs.existsSync(input)) {
    console.warn(`Skip missing: ${input}`)
    continue
  }
  const base = file.replace(/\.(png|jpe?g)$/i, '')
  const output = path.join(dir, `${base}.webp`)
  const maxW = maxWidthFor(base)
  const meta = await sharp(input).metadata()
  const pipeline = sharp(input).rotate()
  if (meta.width && meta.width > maxW) {
    pipeline.resize({ width: maxW, withoutEnlargement: true })
  }
  await pipeline.webp({ quality: 78, effort: 5 }).toFile(output)
  const before = fs.statSync(input).size
  const after = fs.statSync(output).size
  console.log(
    `${file} → ${base}.webp  ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB`
  )
}
