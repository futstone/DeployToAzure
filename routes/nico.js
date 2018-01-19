var express = require('express');
var router = express.Router();

/* GET about. */
router.get('/', function(req, res, next) {
  res.send('My deployment github repository can be found at https://github.com/futstone/DeployToAzure');
});

module.exports = router;
