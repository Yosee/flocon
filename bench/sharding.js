var cluster = require('cluster')
  , iworkers = process.argv[2] || 4
  , workers = iworkers;

Array.prototype.sum = function() {
  var result = 0;
  for (var i = 0; i < this.length; i++) {
    result += +this[i];
  }

  return result;
};

function checkCollisions() {
  var id, exists = {};
  while (id = tids.pop()) {
    if (exists[id]) {
      for (var c in cluster.workers) {
        cluster.workers[c].kill();
      }
      console.log('Collision:', id);
      require('fs').writeFileSync('collision.txt', JSON.stringify(tids));
      process.exit();
      return;
    }
    exists[id] = true;
  }
}

if (cluster.isMaster) {

  console.log('Burst size %d', process.argv[3] || 60);
  console.log('Starting %d workers...', workers);

  var total = 0
    , tids  = []
    , trate = [0, 0, 0]
    , tmem  = [0, 0, 0]
    , lastCount = 0;

  while (iworkers--) {
    var worker = cluster.fork();
    worker.on('message', function(msg) {
      var index = this.workerID - 1
        , ids = msg[0]
        , mem = msg[1];

      total += ids.length;
      tids = tids.concat(ids);
      tmem[index] = mem;

      if (tids.length > 1000) {
        checkCollisions();
      }
    });
  }

  stats = setInterval(function () {
    rate = (total - lastCount) / 5;
    lastCount = total;
    console.log('%s ids, %s ids/sec, %d MB, %d workers', total, rate, tmem.sum(), workers);
  }, 5000);
}

if (cluster.isWorker) {
  require('./sharding-worker');
}
