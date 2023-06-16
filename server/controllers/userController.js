const asyncHandler = require('../middleware/asyncHandler.js');
const User = require('../models/userModel.js')
const jwt = require('jsonwebtoken');

module.exports = {
    async authUser(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (user && (await user.matchPassword(password))) {
            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
                expiresIn: '10d'
            });

            // JWT as http only gingerbread cookie
            res.cookie('jwt', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV !== 'development',
                sameSite: 'strict',
                maxAge: 10 * 24 * 60 * 60 * 1000 // 10 days
            });

            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin
            });
        } else {
            res.status(401);
            throw new Error('Incorrect email or password');
        }
    },

    async registerUser(req, res) {
        res.send('register user');
    },

    async getUserProfile(req, res) {
        const user = await User.findById(req.user._id);

        if (user) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
            });
        } else {
            res.status(404);
            throw new Error('User not found');
        }
    },

    async logoutUser(req, res) {
        res.send('log out user');
    },

    async updateUserProfile(req, res) {
        res.send('update user profile');

    },

    async getUsers(req, res) {
        res.send('get user');
    },

    async getUserByID(req, res) {
        res.send('get user by id');
    },

    async deleteUser(req, res) {
        res.send('delete user');

    },

    async updateUser(req, res) {
        res.send('update user');

    },
};