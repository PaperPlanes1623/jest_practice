const isAnagram = require('./anagram');

//another way to checks to see if is actual function
test('isAnagram function exists', () => {
  expect(typeof isAnagram).toEqual('function');
});

//checks to see if isAnagram function works
test('"cinema" is anagram of "iceman"', () => {
  expect(isAnagram('cinema', 'iceman')).toBeTruthy();
});

//checks to see if isAnagram function works
test('"dormitory" is anagram of "dirty room##"', () => {
  expect(isAnagram('Dormitory', 'dirty room##')).toBeTruthy();
});

//checks to see if isAnagram function works--shouldnt be an anagram
test('"hello" is not anagram of "aloha"', () => {
  expect(isAnagram('Hello', 'Aloha')).toBeFalsy();
});
