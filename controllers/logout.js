const router = require("express").Router();
const { User, List } = require("../models");

// url /logout
// router.get("/", async (req, res) => {
//     try {
//         res.render('home');
//         res.status(200).json({message: 'Hello there logout!'});

//     } catch (err){
//         res.status(500).json(err);
//     }
// });

router.post("/", (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});


module.exports = router;