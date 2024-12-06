import { part_1_input, part_1_test_input } from './input';

function isStringArray(input: unknown): input is Array<string> {
  return typeof input?.[0] === 'string';
}

function resolvePuzzle(input: string) {
  const regex =
    /(mul\(([0-9]|[1-9][0-9]|[1-9][0-9][0-9]|1000),([0-9]|[1-9][0-9]|[1-9][0-9][0-9]|1000)\))/g;
  const matchedRegex = input.match(regex);
  const number = matchedRegex?.reduce(callback, '0');
  console.log('number', number);
}

function callback(accumulator: string, current: string) {
  const evaluatedCode = eval(current);
  const parsedNumber = parseInt(accumulator);

  return parsedNumber + evaluatedCode;
}

function mul(x: number, y: number) {
  return x * y;
}

resolvePuzzle(part_1_test_input);
resolvePuzzle(part_1_input);
