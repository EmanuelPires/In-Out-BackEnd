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
    console.log('**********************************');
    console.log(JSON.stringify(req.body));
    console.log('**********************************');
    // console.log(JSON.stringify(req.body));
    console.log('**********************************');
    T.post('media/upload', { media_data: req.body }, function(
      err,
      data,
      response
    ) {
      // now we can assign alt text to the media, for use by screen readers and
      // other text-based presentations and interpreters
      var mediaIdStr = data.media_id_string;
      console.log('**********************************');
      console.log(data);
      console.log('**********************************');
      console.log(mediaIdStr);
      console.log('**********************************');
      var altText =
        "This is suposed to be a synth image that I'm tweetin from node.js";
      var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } };
      console.log(meta_params);
      console.log('**********************************');

      var params = {
        status: 'Tweeting and testing using Front  end',
        media_ids: [mediaIdStr]
      };

      T.post('statuses/update', params, function(err, data, response) {
        console.log(data);
        console.log('**********************************');
      });

      // T.post('media/metadata/create', meta_params, function(
      //   err,
      //   data,
      //   response
      // ) {
      //   if (!err) {
      //     // now we can reference the media and post a tweet (media will attach to the tweet)
      //     var params = {
      //       status: 'Tweeting and testing using Front  end',
      //       media_ids: [mediaIdStr]
      //     };

      //     T.post('statuses/update', params, function(err, data, response) {
      //       console.log(data);
      //     });
      //   }
      // });
    });
  }
};
