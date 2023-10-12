const { sortObjectsByProperty } = require('../src/ex9');

test('sortObjectsByProperty should sort objects based on the specified property', () => {
  const input = [{ id: 2 }, { id: 1 }, { id: 3 }];
  const sorted = sortObjectsByProperty(input, 'id');
  expect(sorted).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
});
