var express = require('express');
var router = express.Router();
var fs = require('fs');

var rOption = {
  flags : 'r',
  encoding : null,
  mode : 0666
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  // var stream = fs.createReadStream('data.json', rOption);
  // stream.pipe(res);

  var stream = fs.createReadStream('start.html', rOption);
  stream.pipe(res);
});

module.exports = router;
