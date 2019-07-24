const converter = require('../converter')

var assert = require('assert');
describe('Converter', function() {
  it('should return rate when 1 provided', function() {
    assert.equal(converter(1), 1.3066);
  });

  it('should return 1306.6 when 1000 provided', function() {
    assert.equal(converter(1000), 1306.6);
  });
});
