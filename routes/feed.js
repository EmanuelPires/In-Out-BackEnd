var express = require('express');
var router = express.Router();
const feedbackcontroller = require('../controllers/feedbackcontroller');

router.route('/save').post(feedbackcontroller.create);

router.route('/find').get(feedbackcontroller.findAll);

router.route('/tweet').post(feedbackcontroller.tweet);

module.exports = router;
