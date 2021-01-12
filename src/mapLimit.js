const async = require('async');

const ids = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

async.mapLimit(ids, 3, (item, callback) => {

  setTimeout(() => {
    console.log('Proccess: ', item);
    callback(null, item * 2);
  }, 1000)

}, (err, results) => {
  console.log('all done', err, results);
});