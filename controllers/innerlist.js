const router = require("express").Router();
const { User, List, Items } = require("../models");

// need to be removed? bc this is all the items, not a list based
router.get("/", async (req, res) => {
  try {
    let dbitems = await Items.findAll({include: List});
    let items = dbitems.map((item) => item.get({ plain: true }));
    console.log(items);
    res.render("groceries", {
      items
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let dbitems = await Items.findAll({
      include: List,
      where: {
        list_id: req.params.id,
      },
    });
    let items = dbitems.map((item) => item.get({ plain: true }));
    console.log(items);
    res.render("groceries", {
      items,list:'true'
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
