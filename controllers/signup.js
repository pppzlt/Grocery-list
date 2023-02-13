const router = require("express").Router();
const { User, UserList } = require("../models");

router.get("/", async (req, res) => {
    try {
        res.render('signup');
        // res.status(200).json({message: 'Hello there signup!'});

    } catch (err){
        res.status(500).json(err);
    }
});

router.post("/newuser", async (req, res) => {
    try {

    } catch (err){
        res.status(500).json(err);
    }
})

module.exports = router;