const router = require("express").Router();
const { User, List, Items } = require("../models");


router.get("/", async (req, res) => {
    try {
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

router.post("/", async (req, res) => {
    try {
        let result = await Items.create(req.body);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json(err);
    }
});

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

router.get("/:id", async (req, res) => {
    try {
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

module.exports = router;
