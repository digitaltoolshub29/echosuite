const User = require('../models/User');
const bcrypt = require('bcryptjs');

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = async (req, res) => {
  res.send('Register Route');
};

module.exports = {
  registerUser,
};
