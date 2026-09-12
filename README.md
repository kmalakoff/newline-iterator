# newline-iterator

Iterate over a string one line at a time. It recognizes CRLF, LF, and CR line endings.

```bash
npm install newline-iterator
```

```js
var newlineIterator = require('newline-iterator');

var iterator = newlineIterator('some\r\nstring\ncombination\r');
var lines = [];
var result = iterator.next();
while (!result.done) {
  lines.push(result.value);
  result = iterator.next();
}
console.log(lines); // [ 'some', 'string', 'combination' ]
```

The returned object implements the iterator protocol. Calling `next()` returns each line with `done: false`, then returns `{ value: null, done: true }` at the end.

[API docs](https://kmalakoff.github.io/newline-iterator/)
