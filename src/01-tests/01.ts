export function sum(a: number, b: number) {
  return a + b;
}

export function mult(a: number, b: number) {
  return a * b;
}

export function splitIntoWord(sentense: string) {
  return sentense
    .split(" ")
    .filter((w) => w !== "")
    .map((w) => w.replace("!", "").replace("?", ""));
}