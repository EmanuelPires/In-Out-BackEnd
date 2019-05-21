var router = require('express').Router();
const feedroutes = require('./feed');

router.use('/feedback', feedroutes);

module.exports = router;
