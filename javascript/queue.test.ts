import { createQueue } from './queue';

test('queue', () => {
  const queue = createQueue(3);
  expect(queue.isEmpty()).toBe(true);
  expect(queue.isFull()).toBe(false);

  queue.enqueue(0);
  queue.enqueue(1);
  queue.enqueue(2);
  expect(queue.isFull()).toBe(true);
  expect(() => queue.enqueue(3)).toThrowError('queue is full');

  expect(queue.dequeue()).toBe(0);
  expect(queue.dequeue()).toBe(1);
  expect(queue.dequeue()).toBe(2);
  expect(queue.isEmpty()).toBe(true);
  expect(() => queue.dequeue()).toThrowError('queue is empty');
});
