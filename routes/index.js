const express = require('express');
const router = express.Router();
//const zoo = require('../models/zoo')

/* GET home page. */
router.get('/', function(req, res, next) {
  //gres.render('', { title: 'New' });
  res.redirect('/zoo')

});

//step 8 n the "create" route, use mongoose to add 
//a document to your database (.create()) based on what is in req.body. Commit.
// router.post('/create',function(req,res,next){
//   res.redirect('/')
// })





module.exports = router;