const bcrypt = require("bcryptjs");

const users = [
    {
        id: "4c025d3b-6d89-4745-a3cd-5468672ce8dd",
        name: "admin",
        email: "admin@unsia.ac.id",
        passwordHash: "$2a$12$3yXr5wdHWt.U0ReGMhRAGOdngIFoHPnv5d3BphCZ/X4o0D9kyKvLi",
        role: "admin",
        createdAt: new Date().toISOString()
    }
];

module.exports = users;