export function setColor(colors: string[]): string {
  return colors[Math.floor(Math.random() * colors.length)];
}

export const palette = [
  "lightcoral",
  "lightsalmon",
  "lightseagreen",
  "lightskyblue",
  "lightpink",
];
