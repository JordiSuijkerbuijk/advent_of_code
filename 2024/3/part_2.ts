import { part_1_input, part_2_test_input } from './input';

function isStringArray(input: unknown): input is Array<string> {
  return typeof input?.[0] === 'string';
}

function resolvePuzzle(input: string) {
  const regex =
    /((don't())|(do\(\))|mul\(([0-9]|[1-9][0-9]|[1-9][0-9][0-9]|1000),([0-9]|[1-9][0-9]|[1-9][0-9][0-9]|1000)\))/g;
  const matchedRegex = input.match(regex);
  let array: Array<string> = [];
  let addToArray = true;

  for (const item of matchedRegex ?? []) {
    if (item === 'do()' || item === "don't") {
      if ((item === 'do()') !== addToArray) {
        addToArray = !addToArray;
      }
      continue;
    }

    if (!addToArray) {
      continue;
    }

    array.push(item);
  }

  console.log('array', array);
  const number = array?.reduce(callback, '0');
  console.log('number', number);
}

function callback(accumulator: string, current: string) {
  console.log('current', current);
  const evaluatedCode = eval(current);
  const parsedNumber = parseInt(accumulator);

  return parsedNumber + evaluatedCode;
}

function mul(x: number, y: number) {
  return x * y;
}

resolvePuzzle(part_2_test_input);
resolvePuzzle(part_1_input);
