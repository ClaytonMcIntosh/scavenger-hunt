const asyncHandler = require('express-async-handler')

const Hunt = require('../models/huntModel')
const User = require('../models/userModel')

// @desc Get hunts
// @route GET /api/hunts
// @access Private
const getHunts = asyncHandler(async (req, res) => {
    const hunts = await Hunt.find({ user: req.user.id })

    res.status(200).json(hunts)
})

// @desc Set hunts
// @route POST /api/hunts
// @access Private
const setHunt = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const hunt = await Hunt.create({
        text: req.body.text,
        user: req.user.id,
    })

    res.status(200).json(hunt)
})

// @desc Update hunts
// @route PUT /api/hunts/:id
// @access Private
const updateHunt = asyncHandler(async (req, res) => {
    const hunt = await Hunt.findById(req.params.id)

    if (!hunt) {
        res.status(400)
        throw new Error('Hunt not found')
    }

    //check for user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the hunt user
    if (hunt.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedHunt = await Hunt.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedHunt)
})

// @desc Delete hunts
// @route DELETE /api/hunts/:id
// @access Private
const deleteHunt = asyncHandler(async (req, res) => {
    const hunt = await Hunt.findById(req.params.id)

    if (!hunt) {
        res.status(400)
        throw new Error('Hunt not found')
    }

    //check for user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the hunt user
    if (hunt.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    await hunt.remove()

    res.status(200).json({ id: req.params.id })
})


module.exports = {
    getHunts,
    setHunt,
    updateHunt,
    deleteHunt,
}