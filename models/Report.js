const db = require('../db/config')

class Report {
    constructor(report) {
        this.id = report.id || null;
        this.category = report.category;
        this.title = report.title;
        this.description = report.description;
        this.error_log = report.error_log;
        this.solution = report.solution;
    }
    
    static getAll() {
        return db
            .manyOrNone('SELECT * FROM reports ORDER BY id ASC')
            .then((reports) => {
                return reports.map((report) => {
                    return new this(report);
                });
            });
    }
    
    static getById(id) {
        return db
            .oneOrNone('SELECT * FROM reports WHERE id = $1', id)
            .then((report) => {
                if (report) return new this (report);
                throw new Error('Error report not found.')
            });
    }

    save() {
        return db
            .one(

            `INSERT INTO reports (category, title, description, error_log, solution)
            VALUES ($/category/, $/title/, $/description/, $/error_log/, $/solution/)
            RETURNING *`,
                this
            )
            .then((report) => {
                return Object.assign(this, report);
            });
    }

    update(changes) {
        Object.assign(this, changes);
        return db
            .oneOrNone(

                `UPDATE reports SET
                    category = $/category/,
                    title = $/title/,
                    description = $/description/,
                    error_log = $/error_log/,
                    solution = $/solution/
                    RETURNING *`,
                        this
                    )
                    .then((report) => {
                        return Object.assign(this, report);
                    });
    }
    
    delete() {
        return db.oneOrNone('DELETE FROM reports WHERE id = $1', this.id);
    }
}

module.exports = Report;