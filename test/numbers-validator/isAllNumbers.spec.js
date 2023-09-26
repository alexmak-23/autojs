const { expect } = require('chai');
const { describe, it, beforeEach, afterEach } = require('mocha');
const NumbersValidator = require('../../src/numbers-validator');

describe('isAllNumbers positive tests', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return true when provided with array of numbers', () => {
    const validationResults = validator.isAllNumbers([0, -12, 1.25, 890]);
    expect(validationResults).to.equal(true);
  });

  it('should return false when provided with array which contains string', () => {
    const validationResults = validator.isAllNumbers([0, -12, '3', 1.25, 890]);
    expect(validationResults).to.equal(false);
  });

  it('should throw an error when provided with number', () => {
    expect(() => {
      validator.isAllNumbers(1);
    }).to.throw('[1] is not an array');
  });
});
