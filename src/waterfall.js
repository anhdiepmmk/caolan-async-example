const async = require('async');

async.waterfall([
  function firstStep(callback) {
    callback(null, 'A Message');
  },
  function secondStep(message, callback) {
    console.log(message);
    callback(null, 1,2,3);
  },
  function thirdStep(arg1, arg2, arg3, callback) {
     console.log(arg1, arg2, arg3);
     callback(null, 'My last message');
  }
], (err, result) => {
  if (err) {
    throw new Error(err);
  } else {
    console.log('No error happened in any steps, operation done!', result);
  }
});