const router = require("express").Router();
const { User, List } = require("../models");
const bcrypt = require("bcrypt");
// url /home
router.get("/", async (req, res) => {
    try {
        res.render("home");
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post("/login", async (req, res) => {
    try {
        const passwordCheck = req.body;
        // console.log(passwordCheck);
        const userData = await User.findOne({
            where: { email: passwordCheck.email },
        });
        console.log(userData);

        if (!userData) {
            res.status(404).json({ message: "Login failed. Please try again" });
            console.log("you took the 404 route");
            return;
        }

        const validPassword = await bcrypt.compare(
            passwordCheck.password,
            userData.password
        );

        if (!validPassword) {
            res.status(400).json({ message: "Login failed. Please try again" });
            console.log("you took the 400 route");
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.user_id;
            req.session.logged_in = true;

            res.status(200).json({
                user: userData,
                message: "You are now logged in!",
            });
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
