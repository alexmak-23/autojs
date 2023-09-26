const { expect } = require('chai');
const { describe, it, beforeEach, afterEach } = require('mocha');
const NumbersValidator = require('../../src/numbers-validator');

describe('isNumberEven positive tests', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return true when provided with even number', () => {
    const validationResults = validator.isNumberEven(4);
    expect(validationResults).to.equal(true);
  });

  it('should return false when provided with odd number', () => {
    const validationResults = validator.isNumberEven(5);
    expect(validationResults).to.equal(false);
  });

  it('should throw an error when provided with string', () => {
    expect(() => {
      validator.isNumberEven('5');
    }).to.throw('[5] is not of type "Number" it is of type "string"');
  });
});
