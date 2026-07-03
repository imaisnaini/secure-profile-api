const users = require('../data/users');

function getMe(req, res) {
    const data = users.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt
    }));

    return res.status(200).json({ success: true, data });
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

function getCount(req, res) {
    return res.status(200).json({
        success: true,
        message: 'Data jumlah user berhasil didapat.',
        data: {
            usersCount: users.length,
        }
    });
}

module.exports = { getMe, getAllUsers, getCount };