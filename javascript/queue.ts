export interface Queue<T> {
  init(): void;
  isEmpty(): boolean;
  isFull(): boolean;
  enqueue(elem: T): void;
  dequeue(): T;
}

export const createQueue = <T>(size: number = 100): Queue<T> => {
  const queue: T[] = [];
  let front = 0;
  let rear = 0;

  const next = (i: number) => (i + 1) % (size + 1);
  const init = () => {
    front = rear = 0;
  };
  const isEmpty = () => front === rear;
  const isFull = () => front === next(rear);
  const enqueue = (elem: T) => {
    if (isFull()) {
      throw new Error('queue is full');
    }
    queue[rear] = elem;
    rear = next(rear);
  };
  const dequeue = () => {
    if (isEmpty()) {
      throw new Error('queue is empty');
    }
    const current = front;
    front = next(front);
    return queue[current];
  };

  return {
    init,
    isEmpty,
    isFull,
    enqueue,
    dequeue
  };
};
