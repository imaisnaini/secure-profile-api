const { body } = require('express-validator');

const changePasswordValidator = [
    body('oldPassword')
        .notEmpty()
        .withMessage('Password lama wajib diisi.'),
    body('newPassword')
        .isString()
        .withMessage('Password harus berupa teks.')
        .isLength({ min: 8 })
        .withMessage('Password minimal 8 karakter.')
        .matches(/[a-z]/)
        .withMessage('Password harus memiliki huruf kecil.')
        .matches(/[A-Z]/)
        .withMessage('Password harus memiliki huruf besar.')
        .matches(/[0-9]/)
        .withMessage('Password harus memiliki angka.')
];

module.exports = changePasswordValidator;