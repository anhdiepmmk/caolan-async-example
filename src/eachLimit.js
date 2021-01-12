const async = require('async');

const ids = [1,2,3,4,5,6,7,8,9,10,11,12];

async.eachLimit(ids, 3,  function(id, done) {
  console.log(Date.now(),  id);
  setTimeout(() => {
      done();
  }, 3000);
}, function(err){
  console.log(err);
});