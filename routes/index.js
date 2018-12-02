var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var locals = {
    title: 'Chat-Sight'
  };
  res.render('index', locals);
});

module.exports = router;
