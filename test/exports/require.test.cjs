const assert = require('assert');
const newlineIterator = require('newline-iterator');

describe('exports .cjs', () => {
  it('first newline', () => {
    const iterator = newlineIterator('some\r\nstring\ncombination\r');
    assert.deepEqual(iterator.next(), { value: 'some', done: false });
  });
});
