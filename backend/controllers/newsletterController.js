const asyncHandler = require('express-async-handler')
const Newsletter = require('../models/newsletterModel')

// @desc    Subscribe to newsletter
// @route   POST /api/newsletter
// @access  Public
const subscribe = asyncHandler(async (req, res) => {
  const { email } = req.body

  if (!email) {
    res.status(400)
    throw new Error('Please add an email')
  }

  // Check if already subscribed
  const subscriberExists = await Newsletter.findOne({ email })

  if (subscriberExists) {
    res.status(400)
    throw new Error('Email already subscribed')
  }

  // Create subscriber
  const subscriber = await Newsletter.create({
    email,
  })

  if (subscriber) {
    res.status(201).json({
      _id: subscriber.id,
      email: subscriber.email,
      message: 'Subscribed successfully!',
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

module.exports = {
  subscribe,
}
