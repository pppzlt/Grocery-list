// importing router and the correct tables along with bcrypt
const router = require("express").Router();
const { User, UserList } = require("../models");
const bcrypt = require('bcrypt');
// url /signup render the page
router.get("/", async (req, res) => {
    try {
        res.render('signup');
    } catch (err){
        res.status(500).json(err);
    }
});
// used in signup page
// post the new user to the database along with the encrypted password
router.post("/newuser", async (req, res) => {
    try {
        const newUser = req.body;
        newUser.password = await bcrypt.hash(req.body.password, 10);
        // new log would be the new user instance..
        let newLog = await User.create(newUser);
        // console.log(newLog);
        req.session.save(() => {
            req.session.user_id = newLog.user_id;
            req.session.logged_in = true;
            res.status(200).json(newLog)
        })
    } catch (err){
        res.status(500).json(err);
    };
});
// export router
module.exports = router;