const express = require('express');
const router = express.Router();
//const zoo = require('../models/zoo')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('', { title: 'New' });
});

router.post('/create',function(req,res,next){
  res.redirect('/')
})


module.exports = router;


