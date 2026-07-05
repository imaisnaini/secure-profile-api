require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

async function seedAdmin() {
    await mongoose.connect(process.env.MONGODB_URI);

    const existing = await User.findOne({
        email: 'admin@unsia.ac.id'
    });

    if (existing) {
        console.log('Admin already exists.');
        process.exit();
    }

    const passwordHash = "$2a$12$3yXr5wdHWt.U0ReGMhRAGOdngIFoHPnv5d3BphCZ/X4o0D9kyKvLi";

    await User.create({
        name: 'Administrator',
        email: 'admin@unsia.ac.id',
        passwordHash,
        role: 'admin'
    });

    console.log('Admin created.');
    process.exit();
}

seedAdmin();