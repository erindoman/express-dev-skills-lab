var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("something")
  res.render('index', { title: 'SEI Skills!' });
});

module.exports = router;
