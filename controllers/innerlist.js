// requiring express router and the correct tables to manipulate
const router = require("express").Router();
const { User, List, Items } = require("../models");
const withAuth = require("../utils/auth");

// render the page and get all the items inside of the correct list
router.get("/", async (req, res) => {
    try {
        console.log(req.session.user_id);
        let dbitems = await Items.findAll({ include: List });
        let items = dbitems.map((item) => item.get({ plain: true }));
        // console.log(items)
        res.render("groceries", {
            items,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
// create a new item to put in the table when added
router.post("/", async (req, res) => {
    try {
        let result = await Items.create(req.body);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json(err);
    }
});
// delete items based off of their id
router.delete('/:items_id', async (req, res) => {
    try {
        let result = await Items.destroy({
        where: {
            items_id: req.params.items_id
        }
        });
        res.status(200).json(result)
    } catch (err) {
        res.status(400).json(err)
    }
    })

// url innerlist/:id render things on the page based off of their id
router.get("/:id", async (req, res) => {
    try {
        console.log(req.session.user_id);
        let dbitems = await Items.findAll({
            include: List,
            where: {
                list_id: req.params.id,
            },
        });
        let items = dbitems.map((item) => item.get({ plain: true }));
        res.render("groceries", {
            items,
            list: "true",
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
// export router
module.exports = router;
