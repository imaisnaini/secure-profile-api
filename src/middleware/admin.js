function adminOnly(req, res, next) {
    if (req.user.role != "admin") {
        return res.status(403).json({
            success: false,
            message: "Akses ditolak. Hanya admin yang dapat mengakses laman ini."
        })
    }

    next();
}

module.exports = { adminOnly };