const users = require('../data/users');
const bcrypt = require('bcryptjs');


// to get current user data
function getMe(req, res) {
    const data = users.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt
    }));

    return res.status(200).json({ success: true, data });
}


// to get list of all users
function getAllUsers(req, res) {
    const data = users.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt
    }));

    return res.status(200).json({ success: true, data });
}


// to count list of users
function getCount(req, res) {
    return res.status(200).json({
        success: true,
        message: 'Data jumlah user berhasil didapat.',
        data: {
            usersCount: users.length,
        }
    });
}

// for change password request
async function changePassword(req, res, next) {
    try {
        const { oldPassword, newPassword } = req.body;
        const user = users.find((item) => item.id === req.user.id);

        if(!user) {
            return res.status(404).json({
                success: false,
                message: 'User tidak ditemukan.'
            });
        }

        const passwordMatches = await bcrypt.compare(
            oldPassword, 
            user.passwordHash
        );

        if(!passwordMatches) {
            return res.status(401).json({
                success: false,
                message: 'Password lama tidak sesuai'
            });
        }

        user.passwordHash = await bcrypt.hash(newPassword, 10);

        return res.status(200).json({
            success: true,
            message: 'Password berhasil diubah.'
        })
    } catch (error) {
        next(error);
    }
}

module.exports = { getMe, getAllUsers, getCount, changePassword };