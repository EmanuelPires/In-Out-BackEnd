const db = require('../models');

var config = require('../data/twitter_config');
var Twit = require('twit');
var T = new Twit(config);

module.exports = {
  create: function(req, res) {
    db.feedback
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findAll: function(req, res) {
    db.feedback
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  tweet: function(req, res) {
    console.log('Why is this not working');
    var params = {
      status: 'TEST TWEET This time connecting front end'
    };

    T.post('statuses/update', params, function(err, data, response) {
      if (err) {
        console.log(err);
      } else console.log('TWEETED!');
    });
  }
};
