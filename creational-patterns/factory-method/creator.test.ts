import { clientExe, ConcreteCreator1, ConcreteCreator2 } from './creator';

test('test client 1', () => {
  const result = clientExe(new ConcreteCreator1());
  const expected = `Creator: The same creator's code has just worked with Result of the ConcreteProduct1`;
  expect(result).toBe(expected);
});

test('test client 2', () => {
  const result = clientExe(new ConcreteCreator2());
  const expected = `Creator: The same creator's code has just worked with Result of the ConcreteProduct2`;
  expect(result).toBe(expected);
});
