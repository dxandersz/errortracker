const bcrypt = require('bcryptjs');
const User = require('../models/User');

const usersController = {
    index(req, res, next) {
        req.user
            .findUserReports()
            .then((reports) => {
                res.json({
                    message: 'Put a user profile page on this route',
                    data: {
                        user: req.user,
                        reports,
                    },
                });
            })
            .catch(next);
    },
    create(req, res, next) {
        const salt = bcrypt.genSaltSync();
        const hash = bcrypt.hashSync(req.body.password, salt);
        new User({
            username: req.body.username,
            email: req.body.email,
            password_digest: hash,
        })
            .save()
            .then((user) => {
                req.login(user, (err) => {
                    if (err) return next(err);
                    res.redirect('/user');
                });
            })
            .catch(next);
    },
};

usersController.show = (req, res) => {
    const id = req.params.id
    User.getById(id)
    .then((foundUser) => {
        res.json({
            message: 'ok',
            data: { user: foundUser }
        });
    });
};

module.exports = usersController;