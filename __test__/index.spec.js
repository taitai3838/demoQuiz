const { demoFunction } = require("../index");
const _ = require('lodash');

describe("DEMO", () => {
  test("default case", () => {
    expect(demoFunction()).toEqual(true);
  });
  test("error case", () => {
    expect(demoFunction()).toEqual(false);
  });
});
