const express = require('express');
const bodyParser = require('body-parser');

// CREATE user, general authorization
const userRouter = require('./routes/user-router');
// GET errors by user_id, POST/PATCH/DELETE errors
const errorRouter = require('./routes/error-router');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

// Errors will be used to GET errors by user_id, as well as POST, PATCH, DELETE
app.use('/errors', errorRouter);
//Login will also be our initial view if not logged in.
app.use('/login', userRouter);


// for handling errors
app.use('*', (req, res) => {
    res.status(404).send({
        error: 'Not Found',
    });
});