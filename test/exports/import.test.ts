import { assert } from "chai";
import NewlineIterator from "newline-iterator";

describe("exports .ts", function () {
  it("first newline", function () {
    const iterator = new NewlineIterator("some\r\nstring\ncombination\r");
    assert.equal(iterator.next(), "some");
  });
});
