// importing in express router and the correct tables
const router = require("express").Router();
const { User, List } = require("../models");
//ends the sesson
router.post("/", (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});
// export router
module.exports = router;