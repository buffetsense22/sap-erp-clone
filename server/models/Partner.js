const mongoose = require('mongoose');

const partnerSchema = new mongoose.Schema({
  name: String,
  type: String,
  contact: String,
  address: String
});

module.exports = mongoose.model('Partner', partnerSchema);
