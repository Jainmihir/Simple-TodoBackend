const User = require('../models/user');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

const generateToken = (id) => {
  return jwt.sign({ id }, keys.jwtSecret, { expiresIn: '3d' });
};

exports.register = async (req, res) => {
  const { username, password } = req.body;
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    const user = await User.create({ username, password });
    res.status(201).json({
      _id: user._id,
      username: user.username,
      token: generateToken(user._id),
    });

  } catch (error) {
    res.status(500).json({
      message: 'Server error'
    });
  }
};


exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        username: user.username,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({
        message: 'Invalid credentials'
      });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
