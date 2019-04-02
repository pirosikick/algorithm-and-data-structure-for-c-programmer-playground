import { createLinkedList } from './linked-list';

test('insert', () => {
  const list = createLinkedList<number>();
  list.insert(1);
  list.insert(2);
  list.insert(3);
  expect(list.header.next!.value).toBe(1);
  expect(list.header.next!.next!.value).toBe(2);
  expect(list.header.next!.next!.next!.value).toBe(3);
  expect(list.header.next!.next!.next!.next).toBeNull();
});
