const { calculateSquareRoot } = require('../src/ex5');

test('calculateSquareRoot should correctly calculate square root', () => {
  expect(calculateSquareRoot(16)).toBe(4);
  expect(() => calculateSquareRoot(-1)).toThrow('Input cannot be negative');
});
