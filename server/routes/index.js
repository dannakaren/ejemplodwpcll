const express = require('express');

const router = express.Router();

/* GET Home page */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express with babel' });
});

module.exports = router;
