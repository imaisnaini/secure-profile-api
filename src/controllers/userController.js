const User = require('../models/User');
const bcrypt = require('bcryptjs');


// to get current user data
function getMe(req, res) {
    return res.status(200).json({ success: true, data: req.user });
}


// to get list of all users
async function getAllUsers(req, res) {
    const users = await User.find();

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
async function getCount(req, res) {
    const count = await User.countDocuments();

    return res.status(200).json({
        success: true,
        message: 'Data jumlah user berhasil didapat.',
        data: {
            usersCount: count,
        }
    });
}

// for change password request
async function changePassword(req, res, next) {
    try {
        const { oldPassword, newPassword } = req.body;
        const user = await User.findById(req.user.id);

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
        await user.save();

        return res.status(200).json({
            success: true,
            message: 'Password berhasil diubah.'
        })
    } catch (error) {
        next(error);
    }
}

// to delete user by admin
async function deleteUser(req, res){
    const { id } = req.params;

    const user = await User.findById(req.params.id);

    if (!user) {
        return res.status(401).json({
            success: false,
            message: "User tidak ditemukan"
        })
    }

    if (userid === req.user.id) {
        return res.status(400).json({
            success: false,
            message: "Admin tidak dapat menghapus akunnya sendiri"
        })
    }

    await user.deleteOne();

    return res.status(200).json({
        success: true,
        message: "User berhasil dihapus",
        data: {
            id: user.id,
            name: user.name,
            email: user.email
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