const express = require('express')
const router = express.Router()
const { getHunts, setHunt, updateHunt, deleteHunt } = require('../controllers/huntController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getHunts).post(protect, setHunt)
router.route('/:id').delete(protect, deleteHunt).put(protect, updateHunt)

module.exports = router