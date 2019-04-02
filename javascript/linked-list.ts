interface Header<T> {
  next: Cell<T> | null;
}
interface Cell<T> {
  next: Cell<T> | null;
  value: T;
}
interface LinkedList<T> {
  header: Header<T>;
  insert(value: T): void;
}

export const createLinkedList = <T>(): LinkedList<T> => {
  const header: Header<T> = { next: null };
  const insert = (value: T) => {
    let p = header.next;
    let q = header;
    while (p !== null) {
      q = p;
      p = p.next;
    }
    const newCell = {
      next: p,
      value
    };
    q.next = newCell;
  };
  return { header, insert };
};
