import { part_1_input } from './input';

const bag = {
  red: 12,
  green: 13,
  blue: 14,
};

function resolvePuzzle() {
  const lines = part_1_input.split('\n');

  const sum = lines.reduce(callback, '');

  console.log('sum', sum);

  return sum;
}

function callback(previousValue: string, currentValue: string): string {
  const sanitizedGame = currentValue.split(/Game |:|,|;/);

  for (let i = 2; i < sanitizedGame.length; i++) {
    const splitGame = sanitizedGame[i].split(' ');
    const color = splitGame[2];
    const number = splitGame[1];

    if (number > bag?.[color]) {
      return previousValue;
    }
  }

  console.log(!isNaN(parseInt(previousValue)));

  if (!isNaN(parseInt(previousValue))) {
    return `${parseInt(previousValue) + parseInt(sanitizedGame[1])}`;
  }

  return sanitizedGame[1];
}

resolvePuzzle();
