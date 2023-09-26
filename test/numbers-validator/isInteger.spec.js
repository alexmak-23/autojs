const { expect } = require('chai');
const { describe, it, beforeEach, afterEach } = require('mocha');
const NumbersValidator = require('../../src/numbers-validator');

describe('isInteger positive tests', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return true when provided with integer number', () => {
    const validationResults = validator.isInteger(59);
    expect(validationResults).to.equal(true);
  });

  it('should return false when provided with float number', () => {
    const validationResults = validator.isInteger(5.5);
    expect(validationResults).to.equal(false);
  });

  it('should throw an error when provided with string', () => {
    expect(() => {
      validator.isInteger('5');
    }).to.throw('[5] is not a number');
  });
});
