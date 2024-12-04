import { part_1_input, test_input } from './input';

function resolvePuzzle(input: string) {
  const lines = input.split('\n').map((item) => item.split(' '));
  const test = lines.reduce((safeCount, lines) => {
    const line = lines.map(Number);
    if (isSafe(line) || canBecomeSafe(line)) {
      safeCount++;
    }

    return safeCount;
  }, 0);

  console.log('test', test);

  return test;
}

function isSafe(lines: number[]): boolean {
  const difference = lines.slice(1).map((value, index) => value - lines[index]);
  const isIncreasing = difference.every((item) => item > 0 && item <= 3);
  const isDecreasing = difference.every((item) => item < 0 && item >= -3);

  return isIncreasing || isDecreasing;
}

function canBecomeSafe(lines: number[]): boolean {
  for (let i = 0; i < lines.length; i++) {
    const modifiedCopy = lines.slice(0, i).concat(lines.slice(i + 1));
    if (isSafe(modifiedCopy)) {
      return true;
    }
  }

  return false;
}

resolvePuzzle(test_input);
resolvePuzzle(part_1_input);
