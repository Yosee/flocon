var BigInt = require('bigint');

function Flocon() {
  this.count = 0;
  this.epoch = Date.parse('2013');
  this.current = 0;
}

Flocon.prototype.snow = function() {
  var time = Date.now() - this.epoch;

  if (this.current < time) {
    this.current = time;
    this.count = 0;
  }

  var id = new BigInt(0);
  id = id.or(new BigInt(time));
  id = id.shiftLeft(10);
  id = id.or(new BigInt(process.pid % 1024));
  id = id.shiftLeft(13);
  id = id.or(new BigInt(++this.count));

  return id.toString();
};

var flocon = new Flocon();

module.exports = flocon;
