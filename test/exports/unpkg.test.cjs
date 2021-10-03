/* eslint-disable @typescript-eslint/no-var-requires */
const { assert } = require("chai");
const NewlineIterator = require("newline-iterator/dist/umd/index.js");

describe("exports newline-iterator/dist/umd/index.js", function () {
  it("first newline", function () {
    const iterator = new NewlineIterator("some\r\nstring\ncombination\r");
    assert.equal(iterator.next(), "some");
  });
});
