var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res) {
  fs.readFile('data.json', 'utf-8', function(err, data) {
    if(err) throw err;
    data = JSON.parse(data);
    console.log(data);
    
    /*res.writeHead('200',{'Content-Type':"application/json"});
    res.write(data);*/
    res.send(200,data);
  });
});

module.exports = router;
