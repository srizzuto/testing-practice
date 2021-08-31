//arrange
const string1 = 'A string'
const string2 = 'This is a long String'
const error = () => { console.error('Length is shorter than 1 or bigger than 10') };
//act

const stringLength = (string) => {
  if (string.length > 1 && string.length < 10) {
    return string.length
  }
  try {
    throw new Error('Ups!');
  } catch (e) {
    return error;
  }
}

//assert

test('Expect to throw an error', () => {
  expect(stringLength(string2)).toEqual(error);
});

test('Expect to return 8', () => {
  expect(stringLength(string1)).toBe(8);
});