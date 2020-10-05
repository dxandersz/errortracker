const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const userRouter = require('./routes/user-router');
const reportRouter = require('./routes/report-router')

const app = express();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});


app.use('/users', userRouter);
app.use('/reports', reportRouter);

app.use('*', (req, res) => {
    res.status(404).send({
        error: 'Not found',
    });
});

// Initializing constants for auth.



