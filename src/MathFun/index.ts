export function addtorial(num: number): number {
  if (num < 0) {
    throw new Error('input must be >= 0');
  }
  let result = 0;
  while (num > 0) {
    result += num;
    num--;
  }
  return result;
}
