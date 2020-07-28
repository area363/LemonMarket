const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
  userName: String,
  itemTitle: String,
  price: Number,
  description: String,
  photo: String,
  date: { type: Date, default: Date.now }
});

const item = mongoose.model('Item', itemSchema);

module.exports = item;