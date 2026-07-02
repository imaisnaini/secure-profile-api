const express = require('express');
const jwt = require('jswebtoken');

function generateToken(user) {
    return jwt.sign(
        { sub: user.id },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRES_IN || '1h',
            algorithm: 'HS256',
        }
    );
}

module.exports = generateToken;