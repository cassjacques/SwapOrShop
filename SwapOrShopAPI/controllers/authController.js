const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../models');

async function login(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({status: 400, error: 'All fields are required'});
  }

  
  try {
    const user = await db.User.findOne({ email });
    if (!user) {
      res.status(400).json({status: 400, error: 'Invalid credentials. Please try again'});
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('Login passwords do not match');
      return res.status(400).json({status: 400, error: 'Invalid credentials. Please try again'})
    }

    const payload = { userId: user._id };
    const secret = process.env.JWT_SECRET;
    const expiration = {expiresIn: '30d'};

    const token = await jwt.sign(payload, secret, expiration);

    res.json({status: 200, token});
  } catch (err) {
    console.log(err);
    return res.status(500).json({status: 500, error: 'Something went wrong. Please try again'});
  }

}

async function verify(req, res) {
  res.json({status: 200, userId: req.currentUserId});
}


module.exports = {
  login,
  verify,
};
