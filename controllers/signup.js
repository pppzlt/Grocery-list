const router = require("express").Router();
const { User, UserList } = require("../models");
const bcrypt = require('bcrypt');
// url /signup
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
        const newUser = req.body;
        console.log(newUser);
        newUser.password = await bcrypt.hash(req.body.password, 10);
        
        let newLog = await User.create(newUser);
        console.log(newLog);
    } catch (err){
        res.status(500).json(err);
    };
});

module.exports = router;