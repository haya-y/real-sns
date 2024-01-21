"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = __importDefault(require("../models/User"));
const router = (0, express_1.Router)();
// register user
router.post('/register', async (req, res) => {
    try {
        const newUser = await new User_1.default({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        const user = await newUser.save();
        return res.status(200).json(user);
    }
    catch (err) {
        return res.status(500).json(err);
    }
});
// Login
router.post('/login', async (req, res) => {
    try {
        const user = await User_1.default.findOne({ email: req.body.email });
        if (!user)
            return res.status(404).send('The user does not exist');
        const vaildedPassword = req.body.password === user.password;
        if (!vaildedPassword)
            return res.status(400).json('password is wrong');
        return res.status(200).json(user);
    }
    catch (err) {
        return res.status(500).json(err);
    }
});
exports.default = router;
