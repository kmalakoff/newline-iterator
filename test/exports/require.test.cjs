/* eslint-disable @typescript-eslint/no-var-requires */
const { assert } = require("chai");
const NewlineIterator = require("newline-iterator");

describe("exports .cjs", function () {
  it("first newline", function () {
    const iterator = new NewlineIterator("some\r\nstring\ncombination\r");
    assert.equal(iterator.next(), "some");
  });
});
