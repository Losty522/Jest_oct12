const { sumArray } = require('../src/ex2');

test('sumArray should return the sum of all elements in the array', () => {
  expect(sumArray([1, 2, 3])).toBe(6);
  expect(sumArray([-1, 0, 1])).toBe(0);
  expect(sumArray([])).toBe(0);
});
