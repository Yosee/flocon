var should = require('should');
var flocon = require('../lib');
var Long = require('long');

describe('Flocon', function() {

  it('Should return a String containing numbers', function() {
    var id = flocon.snow();

    should.exist(id);
    id.should.be.a('string').and.match(/[0-9]*/);
  });

  it('Should be different', function() {
    var id1 = flocon.snow();
    var id2 = flocon.snow();

    id1.should.not.be.equal(id2);
  });

  it('Should be a long', function() {
    var id = flocon.snow();
    var val = new Long.fromString(id);
    val.toString().should.be.equal(id);
  });

});
