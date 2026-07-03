const express = require('express');
const { protect } = require('../middleware/auth');
const { getMe, getAllUsers } = require('../controllers/userController');

const router = express.Router();

router.use(protect);
router.get('/me', getMe);
router.get('/', getAllUsers);

module.exports = router;