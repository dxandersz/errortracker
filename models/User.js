const db = require('../db/config');

class User {
    constructor(user) {
        this.id = user.id || null;
        this.username = user.username;
        this.password_digest = user.password_digest;
    }

    static getAll() {
        return db
            .manyOrNone('SELECT * FROM users ORDER BY id ASC')
            .then((users) => {
                return users.map((user) => {
                    return new this (user);
                });
            });
    }

    static getById(id) {
        return db
            .oneOrNone('SELECT * FROM users WHERE id = $1', id)
            .then((user) => {
                if (user) return new this(user);
                throw new Error('User not found');
            });
    }


    // Not needed now but could have value when app is expanded.
    static findByUserName(username) {
        return db
            .oneOrNone('SELECT * FROM users WHERE username = $1', username)
            .then((user) => {
                if (user) return new this(user);
                else throw new Error('User not found');
            });
    }

    save() {
        return db
            .one(

                `INSERT INTO users (username, password_digest)
                VALUES ($/username/, $/password_digest/)
                RETURNING *`,
                    this
                )
                .then((user) => {
                    return Object.assign(this, user);
                });
    }


// Can't hurt to keep these routes, but we don't need them for now. Might prune if there's time before submission.
    update(changes) {
        Object.assign(this, changes);
        return db
            .oneOrNone(
                `UPDATE users SET
                    username = $/username/,
                    password_digest = $/password_digest/
                WHERE id = $/id/
                RETURNING *`,
                this
            )
            .then((user) => {
                return Object.assign(this, user);
            });
    }

    delete() {
        return db.oneOrNone('DELETE FROM users WHERE id = $1', this.id);
    }

}

module.exports = User;