import { part_1_input } from './input';

function resolvePuzzle() {
  const lines = part_1_input.split('\n');
  const splitArrayTuple: [Array<number>, Array<number>] = [[], []];

  for (let i = 0; lines.length > i; i++) {
    if (!lines?.[i]) return;
    const splitValue = lines[i].split('   ');
    splitArrayTuple[0].push(parseInt(splitValue[0]));
    splitArrayTuple[1].push(parseInt(splitValue[1]));
  }

  let sum = 0;

  for (let i = 0; splitArrayTuple[0].length > i; i++) {
    if (!splitArrayTuple[0]?.[i]) return;

    sum +=
      splitArrayTuple[0][i] *
      splitArrayTuple[1].filter((item) => item === splitArrayTuple[0][i]).length;
  }

  console.log(sum);

  return sum;
}

resolvePuzzle();
