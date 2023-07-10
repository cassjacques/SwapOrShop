const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  city: {
    type: String,
  },
  starsign: {
    type: String,
  },
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

module.exports = User;