const { isPalindrome } = require('../src/ex8');

test('isPalindrome should correctly identify palindromes', () => {
  expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
  expect(isPalindrome('hello')).toBe(false);
  expect(isPalindrome('Madam, in Eden, I\'m Adam')).toBe(true);
});
