//const { isNumberEven, getEvenNumbersFromArray, isAllNumbers, isInteger } = require('../src/numbers-validator.js');
const NumbersValidator = require('../src/numbers-validator.js');
const expect = require('chai').expect;

const numbersValidator = new NumbersValidator();

describe('Testing the NumbersValidator Functions', function() {

it('1. Tests for isNumberEven funtion', function(done) {
    const testData = [
        [0, true],
        [22, true],
        [1, false],
        [-6, true],
        [1111111111, false],
        ["String", '[String] is not of type "Number" it is of type "string"'],
        [null, '[null] is not of type "Number" it is of type "object"'],
    ];
    let actualResult;
    let expectedResult;
    let testsPerformed ="";
    let counter = 1;
    for (let test of testData) {
        try {
            actualResult = numbersValidator.isNumberEven(test[0]);
        }
        catch(err) {
            actualResult = err.message;
        }
        finally {
            expectedResult = test[1];
            expect(actualResult).to.equal(expectedResult);
            testsPerformed += `\ttest ${counter.toString().padStart(2, '0')}: isNumberEven(${test[0]}) == ${test[1]} \n`;
            counter++;
        }
    }
    done();
    console.log(testsPerformed);
});

});