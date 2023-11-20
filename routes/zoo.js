const express = require('express');
const router = express.Router();

const zoosCtrl = require("../controllers/zoos")

/* GET users listing. */
 router.get("/new", zoosCtrl.new)
 router.get("/",zoosCtrl.index)
 router.post("/",zoosCtrl.create)


module.exports = router;
