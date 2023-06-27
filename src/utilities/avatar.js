export function generateRandomColor() {
  const min = 150;
  const max = 250;
  const randomChannel = () => Math.floor(Math.random() * (max - min + 1) + min);

  const r = randomChannel();
  const g = randomChannel();
  const b = randomChannel();

  const toHex = (c) => {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  const hexR = toHex(r);
  const hexG = toHex(g);
  const hexB = toHex(b);

  return "#" + hexR + hexG + hexB;
}

export function generateInitial(displayName) {
  if (!displayName) {
    return "";
  }
  const nameParts = displayName.split(" ");
  if (nameParts.length === 1) {
    return nameParts[0].charAt(0).toUpperCase();
  }
  return (
    nameParts[0].charAt(0).toUpperCase() +
    nameParts[nameParts.length - 1].charAt(0).toUpperCase()
  );
}
