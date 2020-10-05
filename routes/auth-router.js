const express = require('express');
const authRouter = express.Router();

const authHelpers = require('../services/auth/auth-helpers');
const passport = require('../services/auth/local');

authRouter.get('/login', authHelpers.loginRedirect, (req, res) => {
    res.render('auth/login');
});

authRouter.get('/logout', (req, res) => {
    req.logout();
    res.redirect('back');
});

module.exports = authRouter;