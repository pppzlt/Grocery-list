const router = require("express").Router();
const { User, List } = require("../models");

router.get("/", async (req, res) => {
    try {
        res.render('listPage');
        
    } catch (err){
        res.status(500).json(err);
    }
});


module.exports = router;

