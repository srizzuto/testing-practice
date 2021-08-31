//arrange
const string1 = 'Hello';
const string2 = 'Another String'

//act
const reverseString = (str) => {
  let outcome = str.split("").reverse().join("");
  return outcome;
}

//assert
test('returns olleH', () => {
  expect(reverseString(string1)).toBe('olleH');
});

test('returns gnirtS rehtonA', () => {
  expect(reverseString(string2)).toBe('gnirtS rehtonA');
});
