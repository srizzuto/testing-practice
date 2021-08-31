const add = (n1, n2, n3) => {
  if (n3 === undefined) {
    return n1 + n2
  } else if (n2 === undefined) {
    return n1;
  }
  return n1 + n2 + n3;
}

const rest = (n1, n2) => {
  return n1 - n2;
}

const divide = (n1, n2) => {
  if (n2 !== 0) {
    return n1 / n2;
  }
  try {
    throw new Error('Cannot divide by 0');
  } catch (e) {
    return e;
  }
}

const multiply = (n1, n2) => {
  return n1 * n2;
}