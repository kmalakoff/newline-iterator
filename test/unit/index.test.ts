import { assert } from "chai";
import newlineIterator from "newline-iterator";

describe("newline-iterator", function () {
  describe("next", function () {
    it("all values", function () {
      const string = "some\r\nstring\ncombination\r";
      const iterator = newlineIterator(string);

      assert.deepEqual(iterator.next(), { value: "some", done: false });
      assert.deepEqual(iterator.next(), { value: "string", done: false });
      assert.deepEqual(iterator.next(), { value: "combination", done: false });
      assert.deepEqual(iterator.next(), { value: undefined, done: true });
    });

    it("no breaks", function () {
      const iterator = newlineIterator("somestringcombination");
      assert.deepEqual(iterator.next(), { value: "somestringcombination", done: false });
      assert.deepEqual(iterator.next(), { value: undefined, done: true });
    });
  });

  describe("iterator", function () {
    it("all values", function () {
      const string = "some\r\nstring\ncombination\r";
      const iterator = newlineIterator(string);

      const results = [];
      for (const line of iterator) results.push(line);
      assert.deepEqual(results, ["some", "string", "combination"]);
    });

    it("no breaks", function () {
      const iterator = newlineIterator("somestringcombination");
      const results = [];
      for (const line of iterator) results.push(line);
      assert.deepEqual(results, ["somestringcombination"]);
    });
  });
});
