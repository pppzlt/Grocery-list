const router = require("express").Router();
const { User, List, Items } = require("../models");

router.get("/", async (req, res) => {
  try {
    let dbitems = await Items.findAll();
    console.log(dbitems);
    let items = dbitems.map((item) => item.get({ plain: true }));
    console.log(items);
    res.render("groceries", {
      items,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
