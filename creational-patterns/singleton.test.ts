import { Singleton } from './singleton';

test('test 1', () => {
  const s1 = Singleton.getInstance();
  const s2 = Singleton.getInstance();

  expect(s1 === s2).toBeTruthy();
});
