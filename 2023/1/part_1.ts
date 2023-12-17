import { part_1_input } from './input';

function calibration(input: string) {
  const lines = input.split('\n');

  const sum = lines.reduce(callback, '');

  return sum;
}

function callback(previousValue: string, currentValue: string): string {
  const numbers = [];

  for (let i = 0; i < currentValue.length; i++) {
    if (parseInt(currentValue[i])) {
      numbers.push(currentValue[i]);
    }
  }

  const newNumber = parseInt(numbers[0] + numbers[numbers.length - 1]);
  return `${(parseInt(previousValue) || 0) + newNumber}`;
}

calibration(part_1_input);
