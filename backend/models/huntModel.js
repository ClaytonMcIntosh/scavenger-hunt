const mongoose = require('mongoose')

const huntSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        text: {
            type: String,
            required: [true, 'Please add a text value']
        },
  
    }, {
    timestamps: true
})
let Hunt = mongoose.model('Hunt', huntSchema)

module.exports = Hunt