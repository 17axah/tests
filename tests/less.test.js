const less = require('../tasks/less.js');

test('Функция less (Проверка меньше ли цисло)', () => {
  expect(less(10, 100)).toBe(true);
  expect(less(50, 10)).toBe(false);
  expect(less(50, 50)).toBe(false);
});

