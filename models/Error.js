const db = require('../db/config')

class Error {
    constructor(error) {
        this.id = error.id || null;
        this.category = error.category;
        this.title = error.title;
        this.description = error.description;
        this.error_log = error.error_log;
        this.solution = error.solution;
    }
    

    
    state getById(id) {
        return db
            .oneOrNone('SELECT * FROM errors WHERE id = $1', id)
            .then((error) => {
                if (error) return new this (error);
                throw new Error('Error report not found.')
            });
    }
}