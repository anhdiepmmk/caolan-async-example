const async = require('async');

const ids = [1,2,3,4,5,6,7];

async.each(ids, function(id) {
  setTimeout(() => {
     console.log(id)
  }, 1000);
}, function(err) {
  console.log('err', err);
});