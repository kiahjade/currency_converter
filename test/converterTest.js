const converter = require('../converter')

var assert = require('assert');
describe('Converter', function() {
  it('should return rate when 1 provided', function() {
    assert.equal(converter(1), 1.3066);
  });
});
