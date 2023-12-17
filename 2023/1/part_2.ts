import { part_2_input } from './input';

const numeric_values = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

function calibration(input: string) {
  const lines = input.split('\n');

  const sum = lines.reduce(callback, '');

  console.log('sum', sum);

  return sum;
}

function callback(previousValue: string, currentValue: string): string {
  const numbers = [];

  for (const value in numeric_values) {
    // We add the original value before and after the numeric values so we don't
    // run into edge cases like "oneeight" not working correctly
    currentValue = currentValue.replaceAll(value, value + numeric_values[value] + value);
  }

  for (let i = 0; i < currentValue.length; i++) {
    if (parseInt(currentValue[i])) {
      numbers.push(currentValue[i]);
    }
  }

  const newNumber = parseInt(numbers[0] + numbers[numbers.length - 1]);
  return `${(parseInt(previousValue) || 0) + newNumber}`;
}

calibration(part_2_input);
