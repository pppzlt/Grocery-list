// importing in express router and the correct tables
const router = require("express").Router();
const { User, List } = require("../models");

// render the page
router.get("/", async (req, res) => {
    try {
        res.render('home');
        res.status(200).json({message: 'Hello there logout!'});

    } catch (err){
        res.status(500).json(err);
    }
});
// export router
module.exports = router;