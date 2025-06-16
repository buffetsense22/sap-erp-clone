const mongoose = require('mongoose');

const salesOrderSchema = new mongoose.Schema({
  customer: String,
  items: [{ name: String, quantity: Number }],
  total: Number,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SalesOrder', salesOrderSchema);
