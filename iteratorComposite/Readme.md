# Iterator Pattern

## Intent
provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.

## Structure

The Iterator pattern typically involves:
- **Iterator**: Defines an interface for accessing elements sequentially
- **ConcreteIterator**: Implements the iterator interface to traverse a specific collection
- **Aggregate**: Defines an interface for creating an iterator
- **ConcreteAggregate**: Implements the aggregate interface and returns a concrete iterator

## Participants

- **Iterator Interface**: `next()`, `hasNext()`, `current()`
- **Collection**: Maintains elements and provides `createIterator()`

## Key Benefits

- Decouples collection structure from traversal logic
- Supports multiple simultaneous iterations over the same collection
- Simplifies the collection interface by moving traversal responsibility
- Enables different iteration strategies without modifying the collection

## JavaScript Example

```javascript
class Iterator {
  constructor(items) {
    this.items = items;
    this.index = 0;
  }

  hasNext() {
    return this.index < this.items.length;
  }

  next() {
    return this.items[this.index++];
  }
}

class Collection {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  createIterator() {
    return new Iterator(this.items);
  }
}
```

## When to Use

- Accessing collection elements without exposing internal structure
- Supporting multiple traversal methods on the same collection
- Providing a uniform interface for different collection types