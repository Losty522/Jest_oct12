const { squareArray } = require('../src/ex6');

test('squareArray should square each element of the array', () => {
  expect(squareArray([2, 3, 4])).toEqual([4, 9, 16]);
  expect(squareArray([-1, 0, 1])).toEqual([1, 0, 1]);
});
