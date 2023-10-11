const express = require('express');
const app = express();
const port = 3000;
const host = '0.0.0.0'

const mongoose = require ("mongoose");

//avec une install local
// mongoose.connect('mongodb://127.0.0.1:27017/apinode')
mongoose.connect('mongodb://127.0.0.1:27017/apinode')

//avec Docker (mongodb://nomDuContainer/NomdeLaBDD)
// mongoose.connect('mongodb://mongo/apinode')


//app.use(express.urlencoded({ extended: true }))
app.use(express.urlencoded());
app.use(express.json());

const postRoute = require('./routes/postRoute');
app.use('/posts', postRoute);

const commentRoute = require('./routes/commentRoute');
app.use('/comments', commentRoute);

app.listen(port,host);