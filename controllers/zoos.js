const Zoo = require("../models/zoo");

module.exports = {
    index,
    new: newZoo,
    create,

}

async function create(req, res){
    for(let key in req.body){
        if (req.body[key]==="") delete req.body[key];
    }
    try{
        const zoo = await Zoo.create(req.body);
        res.redirect("/zoos")

    }catch(err){
        console.log(err);
        res.render("zoos/new",{errMsg: err.message})

    }
}

async function newZoo(req, res){
    res.render("zoos/new",{
        title:"Enter New species"
    })
}

async function index(req,res){
    const allSpecies = await Zoo.find({});
    res.render("zoo/index",{
        zoos: allSpecies,
        title: "All species"
    })
}
