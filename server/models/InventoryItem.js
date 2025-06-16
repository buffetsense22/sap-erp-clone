const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  name: String,
  sku: String,
  quantity: Number,
  price: Number
});

module.exports = mongoose.model('InventoryItem', inventorySchema);
