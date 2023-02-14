const router = require("express").Router();
const { User, List } = require("../models");

router.get("/", async (req, res) => {
    try {
        res.render('home');
        res.status(200).json({message: 'Hello there homepage!'});

    } catch (err){
        res.status(500).json(err);
    }
});


module.exports = router;