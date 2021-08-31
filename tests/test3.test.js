//arrange
const number1 = 1;
const number2 = 2;
const number3 = 3;
const number0 = 0;

//act
const add = (n1, n2, n3) => {
  if (n2 === undefined) {
    return n1;
  } else if (n3 === undefined) {
    return n1 + n2;
  }
  return n1 + n2 + n3;
}

const rest = (n1, n2, n3) => {
  if (n2 === undefined) {
    return n1;
  } else if (n3 === undefined) {
    return n1 - n2;
  }
  return n1 - n2 - n3;
}

const divide = (n1, n2) => {
  if (n2 == undefined) {
    throw new Error('Only one parameter given');
  }
  else if (n2 !== 0) {
    return n1 / n2;
  }
  throw new Error('Cannot divide by zero');
}

const multiply = (n1, n2) => {
  return n1 * n2;
}


//assert
describe('add', () => {
  test('only one parameter given', () => {
    expect(add(number1)).toBe(number1);
  });
  test('two parameters', () => {
    expect(add(number1, number2)).toBe(3);
  });
  test('three parameters', () => {
    expect(add(number1, number2, number3)).toBe(6);
  });
});

describe('rest', () => {
  test('only one parameter given', () => {
    expect(rest(number1)).toBe(number1);
  });
  test('two parameters', () => {
    expect(rest(number1, number2)).toBe(-1);
  });
  test('three parameters', () => {
    expect(rest(number1, number2, number3)).toBe(-4);
  });
});

describe('divide', () => {
  test('only one parameter given', () => {
    expect(() => { divide(number1) }).toThrow('Only one parameter given');
  });
  test('by zero', () => {
    expect(() => { divide(number1, number0) }).toThrow('Cannot divide by zero');
  });
  test('two parameters', () => {
    expect(divide(number1, number2)).toBe(0.5);
  });
});