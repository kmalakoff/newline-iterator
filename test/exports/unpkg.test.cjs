const assert = require('assert');
const newlineIterator = require('newline-iterator/dist/umd/newline-iterator.cjs');

describe('exports newline-iterator/dist/umd/newline-iterator.cjs', () => {
  it('first newline', () => {
    const iterator = newlineIterator('some\r\nstring\ncombination\r');
    assert.deepEqual(iterator.next(), { value: 'some', done: false });
  });
});
