const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
    },
    // -- NEW FIELD ADDED --
    // This field will store the number of free credits for each user.
    // It defaults to 5 for every new user.
    credits: {
      type: Number,
      default: 5,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', userSchema)