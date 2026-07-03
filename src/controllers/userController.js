const users = require('../data/users');

function getMe(req, res) {
    return res.status(200).json({ success: true, data: req.user });
}

function getAllUsers(req, res) {
    const data = users.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt
    }));

    return res.status(200).json({ success: true, data });
}

module.exports = { getMe, getAllUsers };