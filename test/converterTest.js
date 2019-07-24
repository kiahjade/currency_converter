const converter = require('../src/converter')

var assert = require('assert');
describe('Converter', function() {
  it('should return error when amount less than £25', function() {
    assert.equal(converter(1), "Minimum exchange is £25");
  });

  it('should take a 1% fee when 1000 provided', function() {
    assert.equal(converter(1001), 1294.827534);
  });

  it('should return error when amount negative', function() {
    assert.equal(converter(-100), "Minimum exchange is £25");
  });

  it('should take £25 fee when 50 provided', function() {
    assert.equal(converter(50), 32.665);
  });
});
