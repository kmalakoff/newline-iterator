import assert from 'assert';
import newlineIterator from 'newline-iterator';

const hasIterator = typeof Symbol !== 'undefined' && Symbol.iterator;

// Unicode test strings
const EMOJI_SIMPLE = '😀'; // 4-byte UTF-8, 2 UTF-16 code units (surrogate pair)
const EMOJI_FAMILY = '👨‍👩‍👧‍👦'; // Multi-codepoint emoji with ZWJ
const CJK = '中文'; // 3-byte UTF-8 each
const COMBINING = 'café'; // 'e' + combining acute accent (U+0301)
const ANSI_RED = '\u001B[31m';
const ANSI_RESET = '\u001B[0m';

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
      assert.deepEqual(iterator.next(), { value: null, done: true });
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

  !hasIterator ||
    describe('unicode', () => {
      it('preserves simple emoji in lines', () => {
        const string = `Hello${EMOJI_SIMPLE}\nWorld${EMOJI_SIMPLE}`;
        const iterator = newlineIterator(string);
        const results = [];
        for (const line of iterator) results.push(line);
        assert.deepEqual(results, [`Hello${EMOJI_SIMPLE}`, `World${EMOJI_SIMPLE}`]);
      });

      it('preserves family emoji in lines', () => {
        const string = `${EMOJI_FAMILY}\ntext\n${EMOJI_FAMILY}`;
        const iterator = newlineIterator(string);
        const results = [];
        for (const line of iterator) results.push(line);
        assert.deepEqual(results, [EMOJI_FAMILY, 'text', EMOJI_FAMILY]);
      });

      it('preserves CJK characters', () => {
        const string = `Hello${CJK}\r\n${CJK}World\n${CJK}`;
        const iterator = newlineIterator(string);
        const results = [];
        for (const line of iterator) results.push(line);
        assert.deepEqual(results, [`Hello${CJK}`, `${CJK}World`, CJK]);
      });

      it('preserves combining characters', () => {
        const string = `${COMBINING}\n${COMBINING}`;
        const iterator = newlineIterator(string);
        const results = [];
        for (const line of iterator) results.push(line);
        assert.deepEqual(results, [COMBINING, COMBINING]);
      });

      it('preserves ANSI escape sequences', () => {
        const string = `${ANSI_RED}Red text${ANSI_RESET}\nNormal text`;
        const iterator = newlineIterator(string);
        const results = [];
        for (const line of iterator) results.push(line);
        assert.deepEqual(results, [`${ANSI_RED}Red text${ANSI_RESET}`, 'Normal text']);
      });

      it('handles mixed unicode and ANSI', () => {
        const string = `${ANSI_RED}${EMOJI_SIMPLE}${CJK}${ANSI_RESET}\r\n${EMOJI_FAMILY}\n${COMBINING}`;
        const iterator = newlineIterator(string);
        const results = [];
        for (const line of iterator) results.push(line);
        assert.deepEqual(results, [`${ANSI_RED}${EMOJI_SIMPLE}${CJK}${ANSI_RESET}`, EMOJI_FAMILY, COMBINING]);
      });

      it('handles emoji with all newline types', () => {
        const string = `${EMOJI_SIMPLE}\r\n${EMOJI_SIMPLE}\n${EMOJI_SIMPLE}\r${EMOJI_SIMPLE}`;
        const iterator = newlineIterator(string);
        const results = [];
        for (const line of iterator) results.push(line);
        assert.deepEqual(results, [EMOJI_SIMPLE, EMOJI_SIMPLE, EMOJI_SIMPLE, EMOJI_SIMPLE]);
      });

      it('handles unicode-only lines with no ASCII', () => {
        const string = `${EMOJI_FAMILY}${CJK}\n${CJK}${EMOJI_SIMPLE}\n${EMOJI_SIMPLE}${EMOJI_FAMILY}`;
        const iterator = newlineIterator(string);
        const results = [];
        for (const line of iterator) results.push(line);
        assert.deepEqual(results, [`${EMOJI_FAMILY}${CJK}`, `${CJK}${EMOJI_SIMPLE}`, `${EMOJI_SIMPLE}${EMOJI_FAMILY}`]);
      });
    });
});
