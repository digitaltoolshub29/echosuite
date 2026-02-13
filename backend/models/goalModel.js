const mongoose = require('mongoose')

const goalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    text: {
      type: String,
      required: [true, 'Please add a text value'],
    },
    transcript: {
      type: String,
      default: '',
    },
    // الحقول الجديدة للمحتوى المولد
    blogPost: {
      type: String,
      default: '',
    },
    tweets: {
      type: [String], // مصفوفة لحفظ التغريدات
      default: [],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Goal', goalSchema)
