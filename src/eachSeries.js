const async = require('async');

const ids = [1,2,3,4,5,6,7];

async.eachSeries(ids, (id, callback) => {
  setTimeout(() => {
    console.log(id);
    callback();
  }, 1000);
}, (err) => {
  console.log('All done', err);
});