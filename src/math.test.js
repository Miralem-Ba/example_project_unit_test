// math.test.js

const { add, subtract, multiply, divide } = require('./math');

test('addition', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtraction', () => {
  expect(subtract(3, 1)).toBe(2);
});

test('multiplication', () => {
  expect(multiply(2, 3)).toBe(6);
});

test('division', () => {
  expect(divide(6, 2)).toBe(3);
});
