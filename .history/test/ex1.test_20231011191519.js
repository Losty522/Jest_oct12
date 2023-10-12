const { findMax } = require('../src/ex1');

test('findMax should return the maximum of two numbers', () => {
  expect(findMax(3, 5)).toBe(5);
  expect(findMax(-1, 0)).toBe(0);
  expect(findMax(10, 10)).toBe(10);
});
