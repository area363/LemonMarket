const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');
const findItemAndUpdate = require('../database/controllers/item.js').findItemAndUpdate
const findItems = require('../database/controllers/item.js').findItems
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static(__dirname + '/../client/dist'));

app.get('/item', (req, res) => {
  findItems(req, res);
})

app.post('/item', (req, res) => {
  findItemAndUpdate(req, res);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});