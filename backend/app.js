const express = require('express');
const bodyParser = require('body-parser');
const moongose = require('mongoose');
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');
const app = express();

moongose.connect('mongodb+srv://luiz:pyduNh1tZQhAlEol@cluster0-jvfgf.mongodb.net/test?retryWrites=true')
  .then(() => {
    console.log('mongoDB Database created!');
  }).catch((err) => {
    console.log('Unable to connect');
    console.log('err', err);
  });

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;