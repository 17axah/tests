const sum = require('../tasks/sum.js');

test('Функция sum (Сложение двух чисел)', () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(5, 5)).toBe(10);
  expect(sum(100, 100)).toBe(200);
  expect(sum()).toBe(0);
});

test('Функция sum (Сложение двух чисел) - аргмуенты по умолчанию', () => {
  expect(sum()).toBe(0);
});
