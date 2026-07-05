const users = require('../data/users');
const bcrypt = require('bcryptjs');


// to get current user data
function getMe(req, res) {
    return res.status(200).json({ success: true, data: req.user });
}


// to get list of all users
function getAllUsers(req, res) {
    const data = users.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
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

// to delete user by admin
function deleteUser(req, res){
    const { id } = req.params;

    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
        return res.status(401).json({
            success: false,
            message: "User tidak ditemukan"
        })
    }

    if (users[userIndex].id === req.user.id) {
        return res.status(400).json({
            success: false,
            message: "Admin tidak dapat menghapus akunnya sendiri"
        })
    }

    const deletedUser = users.splice(userIndex, 1)[0];

    return res.status(200).json({
        success: true,
        message: "User berhasil dihapus",
        data: {
            id: deletedUser.id,
            name: deletedUser.name,
            email: deletedUser.email
        }
    })
}

module.exports = { 
    getMe, 
    getAllUsers, 
    getCount, 
    changePassword, 
    deleteUser 
};