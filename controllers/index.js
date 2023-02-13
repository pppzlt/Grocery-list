const router = require ('express').Router();

const sms = require('./sms');
const homepage = require('./homepage');
const listoflists = require('./listoflists');
const innerlist = require('./innerlist');
const logout = require('./logout');
const signup = require('./signup');

router.use('/', sms);
router.use('/home', homepage);
router.use('/masterlist', listoflists);
router.use('/innerlist', innerlist);
router.use('/logout', logout);
router.use('/signup', signup);


module.exports = router