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

  splitArrayTuple[0].sort((a, b) => a - b);
  splitArrayTuple[1].sort((a, b) => a - b);

  let sum = 0;

  for (let i = 0; lines.length > i; i++) {
    if (!lines?.[i]) return;

    if (splitArrayTuple[0][i] > splitArrayTuple[1][i]) {
      sum += splitArrayTuple[0][i] - splitArrayTuple[1][i];
      continue;
    }

    sum += splitArrayTuple[1][i] - splitArrayTuple[0][i];
    continue;
  }

  console.log(sum);

  return sum;
}

resolvePuzzle();
