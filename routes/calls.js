var express = require('express');
var router = express.Router();

/* GET calls listing. */
router.get('/', function(req, res, next) {
  res.render('calls', { title: 'Chat-Sight' });
});

router.get('/:id', function(req, res, next) {
  res.render('show', Object.assign({}, { title: 'Chat-Sight' }, req.params));
});

module.exports = router;

