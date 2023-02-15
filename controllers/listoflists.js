const router = require("express").Router();
const { User, List, UserList } = require("../models");
const withAuth = require("../utils/auth");

// url /masterlist
router.get("/", async (req, res) => {
    try {
        console.log(req.session.user_id)
        let dbAllList = await List.findAll();
        let allList = dbAllList.map((list) => list.get({ plain: true }));
        // console.log(allList)
        res.render("listPage", {allList});
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/',async (req, res) => {
    try {
        let result = await List.create(req.body);
        //also create the user list relationship
        //await UserList.create(...)
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json(err)
    }
});

router.delete('/:list_id', async (req, res) => {
    try {
        let result = await List.destroy({
            where: {
                list_id: req.params.list_id
            }
        });
        res.status(200).json(result)
    } catch (err) {
        res.status(400).json(err)
    }
})

router.get("/all", async (req, res) => {
    try {
        let findList = await List.findAll();
        res.json(findList)
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
