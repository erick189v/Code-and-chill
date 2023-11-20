const Zoo = require("../models/zoo");

async function create(req, res){
    for(let key in req.body){
        if (req.body[key]==="") delete req.body[key];
    }
}