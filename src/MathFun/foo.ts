// addtorial(5) = 5+4+3+2+1 = 15
// throw an error if the input is less than 0
/* export function addtorial(num: number): number {
  if(num < 0) {
    throw new Error('input must be >= 0');
  } else if (num === 0) {
    return 0;
  }
  return addtorial(num - 1) + num;
} */

export function addtorial(num: number): number {
  if (num < 0) {
    throw new Error('input must be >= 0');
  }
  let result = 0;
  while (num !== 0) {
    result += num;
    num--;
  }
  return result;
}
