import assert from 'assert';
// @ts-ignore
import newlineIterator from 'newline-iterator';

describe('exports .ts', () => {
  it('first newline', () => {
    const iterator = newlineIterator('some\r\nstring\ncombination\r');
    assert.deepEqual(iterator.next(), { value: 'some', done: false });
  });
});
