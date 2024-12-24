import assert from 'assert';
import newlineIterator from 'newline-iterator';

describe('exports .mjs', () => {
  it('first newline', () => {
    const iterator = newlineIterator('some\r\nstring\ncombination\r');
    assert.deepEqual(iterator.next(), { value: 'some', done: false });
  });
});
