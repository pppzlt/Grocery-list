// requiring express router
const router = require("express").Router();
// assigning all of the folder routes to variables
const sms = require("./sms");
const homepage = require("./homepage");
const listoflists = require("./listoflists");
const innerlist = require("./innerlist");
const logout = require("./logout");
const signup = require("./signup");
// assigning routes to the variables
router.use("/", sms);
router.use("/home", homepage);
router.use("/masterlist", listoflists);
router.use("/innerlist", innerlist);
router.use("/logout", logout);
router.use("/signup", signup);
// exporting router
module.exports = router;
