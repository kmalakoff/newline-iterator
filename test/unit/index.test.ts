import assert from 'assert';
// @ts-ignore
import newlineIterator from 'newline-iterator';

const hasIterator = typeof Symbol !== 'undefined' && Symbol.iterator;

describe('newline-iterator', () => {
  describe('next', () => {
    it('all values', () => {
      const string = 'some\r\nstring\ncombination\r';
      const iterator = newlineIterator(string);

      assert.deepEqual(iterator.next(), { value: 'some', done: false });
      assert.deepEqual(iterator.next(), { value: 'string', done: false });
      assert.deepEqual(iterator.next(), { value: 'combination', done: false });
      assert.deepEqual(iterator.next(), { value: null, done: true });
    });

    it('no end', () => {
      const string = 'some\r\nstring\ncombination';
      const iterator = newlineIterator(string);
      assert.deepEqual(iterator.next(), { value: 'some', done: false });
      assert.deepEqual(iterator.next(), { value: 'string', done: false });
      assert.deepEqual(iterator.next(), { value: 'combination', done: false });
      assert.deepEqual(iterator.next(), { value: null, done: true });
    });

    it('no breaks', () => {
      const string = 'somestringcombination';
      const iterator = newlineIterator(string);
      assert.deepEqual(iterator.next(), {
        value: 'somestringcombination',
        done: false,
      });
      assert.deepEqual(iterator.next(), { value: undefined, done: true });
    });
  });

  !hasIterator ||
    describe('iterator', () => {
      it('all values', () => {
        const string = 'some\r\nstring\ncombination\r';
        const iterator = newlineIterator(string);

        const results = [];
        for (const line of iterator) results.push(line);
        assert.deepEqual(results, ['some', 'string', 'combination']);
      });

      it('no breaks', () => {
        const string = 'somestringcombination';
        const iterator = newlineIterator(string);
        const results = [];
        for (const line of iterator) results.push(line);
        assert.deepEqual(results, ['somestringcombination']);
      });
    });
});
