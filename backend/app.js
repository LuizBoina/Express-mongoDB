const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api/stuff', (req, resp, next) => {
  const stuff = [
    {
      _id: '11reer',
      title: 'first thing',
      description: 'first thing created',
      imageUrl: 'https://imgix.ranker.com/user_node_img/50043/1000848545/original/sacred-clay-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces',
      price: 4900,
      userId: 'ffesf'
    },
    {
      _id: 'a22efafea',
      title: 'second thing',
      description: 'second thing created',
      imageUrl: 'https://imgix.ranker.com/user_node_img/50043/1000848545/original/sacred-clay-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces',
      price: 5400,
      userId: 'ffesf'
    }
  ];
  resp.status(200).json(stuff);
});

module.exports = app;