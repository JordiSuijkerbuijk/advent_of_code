import { part_2_input } from './input';

function resolvePuzzle() {
  const lines = part_2_input.split('\n');

  const sum = lines.reduce(callback, '');

  console.log('sum', sum);

  return sum;
}
function callback(previousValue: string, currentValue: string): string {
  const sanitizedGame = currentValue.split(/Game |:|,|;/);

  const currentBag = {
    red: 0,
    green: 0,
    blue: 0,
  };

  for (let i = 2; i < sanitizedGame.length; i++) {
    const splitGame = sanitizedGame[i].split(' ');
    const color = splitGame[2];
    const number = splitGame[1];

    if (color && typeof currentBag?.[color] === 'number' && number) {
      if (number > currentBag[color]) {
        currentBag[color] = parseInt(number);
      }
    }
  }

  const power = currentBag['red'] * currentBag['green'] * currentBag['blue'];
  if (!isNaN(parseInt(previousValue)) && power) {
    return `${parseInt(previousValue) + power}`;
  }

  return `${power}`;
}

resolvePuzzle();
