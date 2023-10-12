const { calculateStringLength } = require('../src/ex3');

test('calculateStringLength should return the correct length of a string', () => {
  expect(calculateStringLength('hello')).toBe(5);
  expect(calculateStringLength('')).toBe(0);
  expect(calculateStringLength('Lorem ipsum dolor sit amet')).toBe(26);
});
