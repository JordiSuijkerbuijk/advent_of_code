import { part_1_input } from './input';

function resolvePuzzle(input: string) {
  const lines = input.split('\n');
  let sum = 0;

  lines.forEach((line) => {
    const splitLine = line.split(' ');
    const isAsc = parseInt(splitLine[0]) < parseInt(splitLine[1]);

    let isSafe = false;

    for (let i = 0; i < splitLine.length; i++) {
      const current = parseInt(splitLine?.[i]);
      const next = parseInt(splitLine?.[i + 1]);
      if (current && next) {
        if (current === next) {
          isSafe = false;
          break;
        }

        if (isAsc !== current < next) {
          isSafe = false;
          break;
        }
        const difference = Math.abs(current - next);
        if (difference < 1 || difference > 3) {
          isSafe = false;
          break;
        }

        isSafe = true;
      }
    }

    if (isSafe) {
      sum += 1;
    }
  });

  console.log('sum', sum);

  return 0;
}

// resolvePuzzle(test_input);
resolvePuzzle(part_1_input);
