const router = require("express").Router();
const { User, List } = require("../models");

router.get("/", async (req, res) => {
    try {
        res.render('listPage');

    } catch (err){
        res.status(500).json(err);
    }   
});

router.get("/List/all", async (req, res) => {
    try { 
        console.log('Im broken');
      let findList = List.findAll();
      console.log(findList);
    } catch (err){
        
        res.status(500).json(err);

    }
});



module.exports = router;