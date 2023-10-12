const { reverseString } = require('../src/ex7');

test('reverseString should reverse the input string', () => {
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('')).toBe('');
  expect(reverseString('abcd')).toBe('dcba');
});
