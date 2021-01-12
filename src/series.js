const async = require('async');

async.series([
  function(callback) {
    setTimeout(() => {
      console.log('1');
      callback(null, 1);
    }, 1000);
  },
  function(callback) {
    setTimeout(() => {
      console.log('2');
      callback(null, 2);
    }, 1000);
  },
  function(callback) {
     setTimeout(() => {
      console.log('3');
     callback(null, 3);
    }, 1000);
  },
  function(callback) {
     setTimeout(() => {
      console.log('4');
      callback(null, 4);
    }, 1000);
  }
], (err, results) => {
  console.log({err, results});
})