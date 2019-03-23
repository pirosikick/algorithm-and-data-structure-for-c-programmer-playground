import { Stack, createStack } from './stack';

let stack: Stack<number>;
beforeEach(() => {
  stack = createStack<number>();
});

test('empty', () => {
  expect(stack.empty()).toBe(true);
});

test('push and pop', () => {
  stack.push(1);
  expect(stack.empty()).toBe(false);
  expect(stack.pop()).toBe(1);
  expect(stack.empty()).toBe(true);
});

test('stack overflow', () => {
  stack = createStack(2);
  stack.push(1);
  stack.push(2);
  expect(() => stack.push(3)).toThrowError('stack overflow');
});

test('stack underflow', () => {
  expect(() => stack.pop()).toThrowError('stack underflow');
});
