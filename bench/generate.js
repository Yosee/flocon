var floconcpp = require('./flocon-cpp');
console.log('id generated with cpp: ' + floconcpp.snow());

var floconlong = require('./flocon-long');
console.log('id generated with long: ' + floconlong.snow());

var floconbignum = require('./flocon-bignum');
console.log('id generated with bignum: ' + floconbignum.snow());

var floconbigint = require('./flocon-bigint');
console.log('id generated with bigint: ' + floconbigint.snow());
