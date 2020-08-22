const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');
const findItemAndUpdate = require('../database/controllers/item.js').findItemAndUpdate
const findItems = require('../database/controllers/item.js').findItems
const app = express();
const PORT = 3000;
const Item = require('../database/models/item.js');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static(__dirname + '/../client/dist'));

app.get('/item', (req, res) => {
  console.log(new Date());
  Item.find({}).sort({ date: -1 })
    .then(result => {
      res.send(result);
    })
  // findItems(req, res);
})

app.post('/item', (req, res) => {
  console.log(new Date());
  console.log('p')
  findItemAndUpdate(req, res);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});