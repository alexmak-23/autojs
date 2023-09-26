const { expect } = require('chai');
const { describe, it, beforeEach, afterEach } = require('mocha');
const NumbersValidator = require('../../src/numbers-validator');

describe('getEvenNumbersFromArray positive tests', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return array of even numbers when provided with array of numbers', () => {
    const validationResults = validator.getEvenNumbersFromArray([-4, 0, 1, 20, 5, 9999]);
    expect(validationResults).deep.to.equal([-4, 0, 20]);
  });

  it('should throw an error when provided with array which contains string', () => {
    expect(() => {
      validator.getEvenNumbersFromArray([-4, 0, '1', 20, 5, 9999]);
    }).to.throw('[-4,0,1,20,5,9999] is not an array of "Numbers"');
  });
});
