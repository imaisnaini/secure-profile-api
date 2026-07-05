const express = require('express');
const { protect } = require('../middleware/auth');
const { getMe, getAllUsers, getCount, changePassword } = require('../controllers/userController');
const changePasswordValidator = require('../validators/changePasswordValidator');

const router = express.Router();

router.use(protect);
router.get('/me', getMe);
router.get('/', getAllUsers);
router.get('/count', getCount);
router.post('/change-password', changePasswordValidator, changePassword);

module.exports = router;