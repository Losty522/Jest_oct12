const { isPrime } = require('../src/ex10');

test('isPrime should correctly identify prime numbers', () => {
  expect(isPrime(2)).toBe(true);
  expect(isPrime(7)).toBe(true);
  expect(isPrime(4)).toBe(false);
  expect(isPrime(11)).toBe(true);
  expect(isPrime(1)).toBe(false);
});
