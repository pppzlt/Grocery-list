const router = require ('express').Router();

const sms = require('./sms')

router.use('/', sms);

module.exports = router