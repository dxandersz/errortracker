const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const userRouter = require('./routes/user-router');

const app = express();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));


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