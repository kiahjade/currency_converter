const converter = require('../src/converter')

var assert = require('assert');
describe('Converter', function() {
  it('should return rate when 1 provided', function() {
    assert.equal(converter(1), 1.3066);
  });

  it('should return take a £25 fee when 1000 provided', function() {
    assert.equal(converter(1001), 1275.2416);
  });
});
