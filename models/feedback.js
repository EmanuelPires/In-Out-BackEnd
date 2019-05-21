const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
  email: { type: String },
  Answer1: { type: String },
  Answer2: { type: String },
  Answer3: { type: String },
  Answer4: { type: String },
  Answer5: { type: String },
  Answer6: { type: String },
  Zipcode: { type: Number }
});

const feedback = mongoose.model('feedback', feedbackSchema);

module.exports = feedback;
