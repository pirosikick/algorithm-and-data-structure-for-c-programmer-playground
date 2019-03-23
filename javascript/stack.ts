export interface Stack<T> {
  push(elem: T): void;
  pop(): T;
  empty(): boolean;
}

export const createStack = <T>(size: number = 100): Stack<T> => {
  if (size < 1) {
    throw new Error('size must be greater than 0');
  }

  const stack: T[] = [];
  let n = 0;

  const push = (elem: T) => {
    if (n >= size) {
      throw new Error('stack overflow');
    }
    stack[n++] = elem;
  };

  const pop = (): T => {
    if (n <= 0) {
      throw new Error('stack underflow');
    }
    return stack[--n];
  };

  const empty = () => n === 0;

  return {
    push,
    pop,
    empty
  };
};
