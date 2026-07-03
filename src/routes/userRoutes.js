const express = require('express');
const { protect } = require('../middleware/auth');
const { getMe, getAllUsers, getCount } = require('../controllers/userController');

const router = express.Router();

router.use(protect);
router.get('/me', getMe);
router.get('/', getAllUsers);
router.get('/count', getCount);

module.exports = router;