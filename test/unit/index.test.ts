import { assert } from "chai";
import NewlineIterator from "newline-iterator";

describe("newline-iterator", function () {
  describe("next", function () {
    it("all values", function () {
      const string = "some\r\nstring\ncombination\r";
      const iterator = new NewlineIterator(string);

      assert.equal(iterator.next(), "some");
      assert.equal(iterator.next(), "string");
      assert.equal(iterator.next(), "combination");
      assert.equal(iterator.next(), null);
    });

    it("no breaks", function () {
      const iterator = new NewlineIterator("somestringcombination");
      assert.equal(iterator.next(), "somestringcombination");
      assert.equal(iterator.next(), null);
    });
  });

  describe("iterator", function () {
    it("all values", function () {
      const string = "some\r\nstring\ncombination\r";
      const iterator = new NewlineIterator(string);

      const results = [];
      for (const value of iterator) results.push(value);
      assert.deepEqual(results, ["some", "string", "combination"]);
    });

    it("no breaks", function () {
      const iterator = new NewlineIterator("somestringcombination");
      const results = [];
      for (const value of iterator) results.push(value);
      assert.deepEqual(results, ["somestringcombination"]);
    });
  });
});
