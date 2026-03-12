export async function mergeImages(photo, signature) {

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const img = new Image();
  img.src = photo;

  await new Promise(res => img.onload = res);

  canvas.width = img.width;
  canvas.height = img.height;

  ctx.drawImage(img, 0, 0);

  const sig = new Image();
  sig.src = signature;

  await new Promise(res => sig.onload = res);

  ctx.drawImage(sig, 0, 0);

  return canvas.toDataURL("image/png");
}