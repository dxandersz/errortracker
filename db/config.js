const DB_NAME = 'errortracker'

const options = {
    query: (e) => {
        console.log(e.query);
    },
};

const pgp = require('pg-promise')();

module.exports = pgp({
    database: DB_NAME,
    port: 5432,
    host: 'localhost',
    //user: 'postgres',
    //password: 'my_postgres_password'
})