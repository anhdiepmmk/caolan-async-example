const async = require('async');


const ids = [1,2,3,4,5,6,7];

async.eachOfLimit(ids, 2, (id, key, callback) => {
  setTimeout(() => {
    console.log({id, key});
    callback();
  }, 1000)
}, (err) => {
  console.log('all done', err);
})