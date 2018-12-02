var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var locals = {
    title: 'Chat-Sight'
  };
  res.render('users', locals)
});

module.exports = router;
