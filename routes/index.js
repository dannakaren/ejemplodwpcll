var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  router.get('/', function (_, res) {
  res.render('index', { title: 'ITGAM', autho: "Danna Gutierrez" });
});
});
module.exports = router;
