export class NullIterator implements Iterator<undefined>{
  next(): IteratorResult<undefined, any> {
    return {value: undefined,done: true};
  }
}