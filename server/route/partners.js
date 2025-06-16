const express = require('express');
const Partner = require('../models/Partner');
const router = express.Router();

router.get('/', async (req, res) => {
  const partners = await Partner.find();
  res.json(partners);
});

router.post('/', async (req, res) => {
  const partner = new Partner(req.body);
  await partner.save();
  res.json(partner);
});

module.exports = router;
