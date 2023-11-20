const express = require('express');
const router = express.Router();
//const zoo = require('../models/zoo')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'New' });
});

module.exports = router;