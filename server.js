const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const userRouter = require('./routes/user-router');
const errorRouter = require('./routes/error-router');

const app = express();

app.use(logger('dev'));
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/errors', errorRouter);
app.use('/users', userRouter);

app.use('*', (req, res) => {
    res.status(404).send({
        error: 'Not found',
    });
});