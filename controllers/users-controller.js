const bcrypt = require('bcryptjs');
const User = require('../models/User');

const usersController = {
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

usersController.index = (req, res) => {
    User.getAll()
    .then((users) => {
        res.json({
            message: 'ok',
            data: { users },
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({ err, message: err.message });
    });
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

usersController.delete = (req, res) => {
    const id = req.params.id;
    User.getById(id).then((foundUser) => {
        return foundUser.delete();
    })
    .then((deletedUser) => {
        res.json({
            message: 'ok',
            user: deletedUser
        });
    })
    .catch((err) => {
        if (err.message === 'Error: User not found') {
            res.status(404).json({ err: 'User not found' })
        } else {
            res.status(500).json({ err })
        }
    })
}

usersController.create = (req, res) => {
    const user = new User({
        username: req.body.username,
        password_digest: req.body.password_digest,
    });

    user.save().then((savedUser) => {
        res.json({
            message: 'ok',
            user: savedUser
        })
    })
}

usersController.update = (req, res) => {
    User.getById(req.params.id)
    .then((user) => {
        return user.update(req.body)
    }).then((updatedUser) => {
        res.json({
            message: 'ok',
            data: { report: updatedUser },
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({ err, message: err.message });
    });
}

module.exports = usersController;