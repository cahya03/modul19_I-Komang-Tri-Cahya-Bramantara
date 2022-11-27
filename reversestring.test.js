const reverseString = require('./reversestring');

test('reverseString function exists', () => {
  expect(reverseString).toBeDefined();
});

test('String reverses', () => {
  expect(reverseString('hello')).toEqual('olleh');
});

test('String reverses', () => {
  expect(reverseString('komang')).toEqual('gnamok');
  // complete with another equal example
});

test('String reverses with uppercase', () => {
  expect(reverseString('Hello')).toEqual('olleh');
});

test('String reverses with uppercase', () => {
  expect(reverseString('Komang')).toEqual('gnamok');
  // complete with another uppercase equal example
});
