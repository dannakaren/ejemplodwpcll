var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//GET /USERS/AUTHOR
router.get('/author', function(_, res) {
  res.render('author',{author:"🤵Danna Gutierrez"});
});

module.exports = router;
