const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

router.post('/register', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send({ message: 'User registered' });
});

router.post('/login', async (req, res) => {
  const user = await User.findOne(req.body);
  if (!user) return res.status(401).send({ error: 'Invalid credentials' });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.send({ token });
});

module.exports = router;
