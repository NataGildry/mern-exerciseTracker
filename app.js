const express = require('express');
const config = require('config');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({extended:true}));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

const {exerciseRouter, userRouter} = require('./routes');

app.use('/exercises', exerciseRouter);
app.use('/users', userRouter);


let db = mongoose.connection;
db.once('open', function () {
    console.log('connected to');
});
db.on('error', function (err) {
    console.log(err);
});

const uri = process.env.MONGO_URI;

async function start() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true
        });
        app.listen(port, () => {
            console.log(`App has been started on port ${port}...`);
        });
    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1);
    }
}

start();
