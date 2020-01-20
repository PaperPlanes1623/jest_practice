const reverseString = require('./reversestring');

//checks if function exists
test('reverseString function exists', () => {
  expect(reverseString).toBeDefined();
});

//checks if function works
test('String reverses lower case', () => {
  expect(reverseString('hello')).toEqual('olleh');
});

//checks if function works
test('String reverses upper case', () => {
  expect(reverseString('Hello')).toEqual('olleh');
});