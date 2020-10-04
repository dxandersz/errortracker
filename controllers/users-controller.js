const User = require('../models/User');

const usersController = {};

usersController.index = (req, res) => {
    User.getAll()
    .then((users) => {
        res.json({
            message: 'ok',
            data: { users },
        });
    })
    .catch((err) => {
        res.status(500).json({ err })
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
    const user = User.getById(req.params.id).then((foundUser) => {
        return foundUser.update(req.body)
    }).then((updatedUser) => {
        res.json({
            message: 'ok',
            user: updatedUser
        })
    })
    .catch((err) => {
        if (err.message === 'User not found') {
            res.status(404).json({ err: 'User not found' })
        } else {
            res.status(500).json({ err })
        }
    })
}

module.exports = usersController;