// Генерация иконок без внешних зависимостей: рисуем RGBA-пиксели и кодируем PNG/ICO.
// Запуск: node scripts/gen-icons.mjs
import zlib from "node:zlib";
import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");
mkdirSync(publicDir, { recursive: true });

// Палитра (navy-950 / white), как в дизайне сайта
const BG = [27, 40, 64, 255]; // #1b2840
const FG = [255, 255, 255, 255];

function makeIcon(size) {
  const px = Buffer.alloc(size * size * 4, 0); // прозрачный фон
  const radius = Math.round(size * 0.22);

  const inRounded = (x, y) => {
    const r = radius;
    if (x >= r && x < size - r) return true;
    if (y >= r && y < size - r) return true;
    const cx = x < r ? r : size - 1 - r;
    const cy = y < r ? r : size - 1 - r;
    return (x - cx) ** 2 + (y - cy) ** 2 <= r * r;
  };

  const set = (x, y, c) => {
    if (x < 0 || y < 0 || x >= size || y >= size) return;
    const i = (y * size + x) * 4;
    px[i] = c[0];
    px[i + 1] = c[1];
    px[i + 2] = c[2];
    px[i + 3] = c[3];
  };

  // Фон со скруглением
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (inRounded(x, y)) set(x, y, BG);
    }
  }

  // Минималистичный знак: три вертикальных столбца разной высоты (industrial/анализ)
  const bars = 3;
  const gap = Math.round(size * 0.07);
  const barW = Math.round(size * 0.12);
  const groupW = bars * barW + (bars - 1) * gap;
  const startX = Math.round((size - groupW) / 2);
  const baseY = Math.round(size * 0.72);
  const heights = [0.26, 0.4, 0.32].map((h) => Math.round(size * h));

  for (let b = 0; b < bars; b++) {
    const bx = startX + b * (barW + gap);
    const top = baseY - heights[b];
    for (let y = top; y <= baseY; y++) {
      for (let x = bx; x < bx + barW; x++) {
        set(x, y, FG);
      }
    }
  }

  return px;
}

// --- Кодирование PNG ---
function crc32(buf) {
  let c = ~0;
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i];
    for (let k = 0; k < 8; k++) c = (c >>> 1) ^ (0xedb88320 & -(c & 1));
  }
  return ~c >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, "ascii");
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
  return Buffer.concat([len, typeBuf, data, crcBuf]);
}

function encodePng(size, rgba) {
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // RGBA
  // фильтр 0 на каждую строку
  const stride = size * 4;
  const raw = Buffer.alloc((stride + 1) * size);
  for (let y = 0; y < size; y++) {
    raw[y * (stride + 1)] = 0;
    rgba.copy(raw, y * (stride + 1) + 1, y * stride, y * stride + stride);
  }
  const idat = zlib.deflateSync(raw, { level: 9 });
  return Buffer.concat([
    sig,
    chunk("IHDR", ihdr),
    chunk("IDAT", idat),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

// --- ICO-контейнер с встроенным PNG ---
function encodeIco(size, pngBuf) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2); // тип: иконка
  header.writeUInt16LE(1, 4); // количество изображений
  const entry = Buffer.alloc(16);
  entry[0] = size >= 256 ? 0 : size;
  entry[1] = size >= 256 ? 0 : size;
  entry[2] = 0;
  entry[3] = 0;
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(pngBuf.length, 8);
  entry.writeUInt32LE(6 + 16, 12);
  return Buffer.concat([header, entry, pngBuf]);
}

const apple = encodePng(180, makeIcon(180));
writeFileSync(join(publicDir, "apple-touch-icon.png"), apple);

const png32 = encodePng(32, makeIcon(32));
writeFileSync(join(publicDir, "favicon-32.png"), png32);
writeFileSync(join(publicDir, "favicon.ico"), encodeIco(32, png32));

console.log("Иконки сгенерированы: apple-touch-icon.png, favicon-32.png, favicon.ico");
