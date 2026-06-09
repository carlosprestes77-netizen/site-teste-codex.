import { mkdir, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { deflateSync } from 'node:zlib';

const crcTable = new Uint32Array(256).map((_, n) => {
  let c = n;
  for (let k = 0; k < 8; k += 1) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c >>> 0;
});

function crc32(buffer) {
  let c = 0xffffffff;
  for (const byte of buffer) c = crcTable[(c ^ byte) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const typeBuffer = Buffer.from(type);
  const out = Buffer.alloc(12 + data.length);
  out.writeUInt32BE(data.length, 0);
  typeBuffer.copy(out, 4);
  data.copy(out, 8);
  out.writeUInt32BE(crc32(Buffer.concat([typeBuffer, data])), 8 + data.length);
  return out;
}

function png(width, height, variant) {
  const raw = Buffer.alloc((width * 4 + 1) * height);
  for (let y = 0; y < height; y += 1) {
    const row = y * (width * 4 + 1);
    raw[row] = 0;
    for (let x = 0; x < width; x += 1) {
      const i = row + 1 + x * 4;
      const grain = (x * 17 + y * 11 + variant * 23) % 34;
      const shade = 172 + grain;
      raw[i] = shade;
      raw[i + 1] = Math.max(120, shade - 14);
      raw[i + 2] = Math.max(96, shade - 34);
      raw[i + 3] = 255;
    }
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;

  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw)),
    chunk('IEND', Buffer.alloc(0))
  ]);
}

const files = [
  ['public/artist/portrait.png', 900, 1200],
  ['public/portfolio/hero.png', 1600, 1000],
  ...Array.from({ length: 10 }, (_, i) => [`public/portfolio/work-${String(i + 1).padStart(2, '0')}.png`, 900, 1200]),
  ...Array.from({ length: 8 }, (_, i) => [`public/flashes/flash-${String(i + 1).padStart(2, '0')}.png`, 800, 800]),
  ...Array.from({ length: 8 }, (_, i) => [`public/flashes/sim/flash-${String(i + 1).padStart(2, '0')}.png`, 800, 800])
];

await Promise.all(files.map(async ([file, width, height], index) => {
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, png(width, height, index + 1));
}));
