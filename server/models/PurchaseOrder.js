const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
  supplier: String,
  items: [{ name: String, quantity: Number }],
  total: Number,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('PurchaseOrder', purchaseSchema);
