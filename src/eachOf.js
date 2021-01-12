const async = require('async');

const ids = [1,2,3,4,5,6,7];

async.eachOf(ids, (id, key, callback) => {
  setTimeout(() => {
    console.log({id, key});
  }, 1000)
}, (err) => {
  console.log('all done', err);
})