const assert = require('assert');

let umd = null;
try {
  umd = require('newline-iterator/umd');
} catch (_) {
  umd = require('newline-iterator/dist/umd/newline-iterator.cjs');
}
const newlineIterator = typeof window !== 'undefined' ? window.newlineIterator : umd.default || umd;

describe('exports umd', () => {
  it('first newline', () => {
    const iterator = newlineIterator('some\r\nstring\ncombination\r');
    assert.deepEqual(iterator.next(), { value: 'some', done: false });
  });
});
