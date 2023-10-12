const { divideNumbers } = require('../src/ex4');

test('divideNumbers should correctly divide two numbers', () => {
  expect(divideNumbers(10, 2)).toBe(5);
  expect(() => divideNumbers(10, 0)).toThrow('Cannot divide by zero');
});
