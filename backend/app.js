const express = require('express');
const bodyParser = require('body-parser');
const moongose = require('mongoose');
const Thing = require('./models/thing');

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

app.post('/api/stuff', (req, res, next) => {
  const thing = new Thing({
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    userId: req.body.userId
  });
  thing.save().then(
    () => {
      res.status(201).json({
        message: 'thing saved'
      })
    }).catch( (error) => {
      res.status(400).json({
        error: error
      });
    });
});

app.use('/api/stuff', (req, res, next) => {
  Thing.find().then(
    (thing) => {
      res.status(200).json(thing);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
});

module.exports = app;