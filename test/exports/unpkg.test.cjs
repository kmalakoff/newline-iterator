const assert = require('assert');
const newlineIterator = require('newline-iterator/dist/umd/newline-iterator.js');

describe('exports newline-iterator/dist/umd/newline-iterator.js', () => {
  it('first newline', () => {
    const iterator = newlineIterator('some\r\nstring\ncombination\r');
    assert.deepEqual(iterator.next(), { value: 'some', done: false });
  });
});
