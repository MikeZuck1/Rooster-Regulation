// Import assert & Rooster form '../index'
const assert = require('assert');
const Rooster = require('../index'); 

describe('Rooster', () => {
  describe('.announceDawn', () => {
      it('returns a rooster call', () => {
      // Setup : Define expected output
      const expected = 'cock-a-doodle-doo!';

      // Exercise
      const actual = Rooster.announceDawn(); 

      // Verify
      assert.strictEqual(actual, expected);
    });
  }); 
});  

describe('.timeAtDawn', () => {
  it('returns its arguments as a string', () => {
    // Setup
    const number = 12; 
    const expected = '12'; 

    // Exercise
    const actual = Rooster.timeAtDawn(number);

    // Verify
    assert.strictEqual(actual, expected);  
  });
  it('throws an error if passed a number less than 0', () => {
    // Setup
    const input = -1; 

    // Exercise
    const actual = () => Rooster.timeAtDawn(input);
  
    // Verify
    assert.throws(actual, RangeError); 
  });
  it('throws an error if passed a number greater than 23', () => {
    // Setup
    const input = 24; 

    // Exercise
    const actual = () => Rooster.timeAtDawn(input);

    // Verify
    assert.throws(actual, RangeError); 
  }); 
});

/**
 *       assert.throws(() => {
        Rooster.timeAtDawn(hour); 
      }, RangeError);    
 */
