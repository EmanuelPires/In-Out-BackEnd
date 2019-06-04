var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
var app = express();
var routes = require('./routes');
var port = process.env.PORT || 3000;

app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/InOut');
app.listen(port, function() {
  console.log('App Listening on Port: ' + port);
});

//views

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
// app.engine('html', require('ejs').renderFile);

//body parser
