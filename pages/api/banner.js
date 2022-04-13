import { createCanvas } from 'canvas';

const wrapText = (
  context,
  text,
  x,
  y,
  maxWidth,
  lineHeight,
) => {
  let words = text.split("");
  let line = "";

  for (let n = 0; n < words.length; n++) {
    let testLine = line + words[n];
    let metrics = context.measureText(testLine);
    let testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      context.fillText(line, x, y);
      line = words[n];
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  context.fillText(line, x, y);
};

export default async (req, res) => {
  const WIDTH = 1200;
  const HEIGHT = 630;

  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext('2d');
  const { text } = req.body;

  ctx.font = '70px NotoSans';
  ctx.fillStyle = "#000000";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  wrapText(ctx, text, 600, 300, 1150, 80);

  const buf = canvas.toBuffer();

  res.status(200).end(buf);
}
