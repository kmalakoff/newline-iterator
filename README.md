## newline-iterator

Line-by-line string iterator

### Example 1

```typescript
import NewlineIterator from "newline-iterator";

const iterator = new NewlineIterator("some\r\nstring\ncombination\r");
const results = [];
for (const value of iterator) results.push(value);
console.log(results); // ["some", "string", "combination"];
```

### Example 2

```typescript
import NewlineIterator from "newline-iterator";

const iterator = new NewlineIterator("some\r\nstring\ncombination\r");
console.log(iterator.next()); // "some"
console.log(iterator.next()); // "string"
console.log(iterator.next()); // "combination"
console.log(iterator.next()); // null
```

### Documentation

[API Docs](https://kmalakoff.github.io/newline-iterator/)
