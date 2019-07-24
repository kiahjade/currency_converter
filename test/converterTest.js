const converter = require('../src/converter')

var assert = require('assert');
describe('Converter', function() {
  it('should return rate with source fee deducted when 1 provided', function() {
    assert.equal(converter(1), 1.293534);
  });

  it('should return take a £25 fee when 1000 provided', function() {
    assert.equal(converter(1001), 1275.2416);
  });

  it('should return 0 when amount negative', function() {
    assert.equal(converter(-100), 0);
  });
});
