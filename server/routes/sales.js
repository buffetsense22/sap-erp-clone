const express = require('express');
const router = express.Router();
const SalesOrder = require('../models/SalesOrder');

router.get('/', async (req, res) => {
  const data = await SalesOrder.find();
  res.json(data);
});

router.post('/', async (req, res) => {
  const order = new SalesOrder(req.body);
  await order.save();
  res.json(order);
});

module.exports = router;
