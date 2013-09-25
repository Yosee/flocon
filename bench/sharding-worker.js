var cluster = require('cluster')
  , ids     = []
  , worker  = cluster.worker
  , flocon  = require('./flocon-cpp');

var burst = +process.argv[3] || 60;

function generateID (){
  while (ids.length < burst) {
    ids.push(flocon.snow());
  }
  send(ids);
  ids = [];
  setImmediate(generateID);
}

generateID();

function send(ids) {
  var mem = Math.floor(process.memoryUsage().rss / 1024 / 1024);
  worker.send([ids, mem]);
}
