// Initializing the loooooong list of dependencies
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

// Importing routers for both tables.
const userRouter = require('./routes/user-router');
const reportRouter = require('./routes/report-router');

// Initializing the app and loading .env
const app = express();
require('dotenv').config();

// Here's our middleware!
app.use(logger('dev'));
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
    session({
        secret: process.env.SECRET_KEY,
        resave: false,
        saveUninitialized: true,
    })
);

app.use(passport.initialize());
app.use(passport.session());

// Views!
app.set('views', 'views');
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Setting up the localhost server.
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

// Routes for index, users, and error reports

app.get('/', (req, res) => {
    res.render('index', {
        appName: 'errortracker',
    });
});

app.use('/users', userRouter);
app.use('/reports', reportRouter);


// For routes that don't get used.
app.use('*', (req, res) => {
    res.status(404).send({
        error: 'Not found',
    });
});

// For dealing with errors!
app.use((err, req, res, next) => {
    res.status(500).send({ err, message: err.message });
});

