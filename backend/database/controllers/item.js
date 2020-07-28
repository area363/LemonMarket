const Item = require('../models/item.js');

module.exports.findItemAndUpdate = (req, res) => {
  // console.log(req.body)
  Item.find({ itemTitle: req.body.itemTitle, userName: req.body.userName }, (err, result) => {
    // console.log(result);
    if (result.length !== 0) {
      Item.findOneAndUpdate({ itemTitle: req.body.itemTitle, userName: req.body.userName }, req.body).then(data => {
        res.send('Updated Item');
      });
    } else {
      // console.log(req.body)
      var newItem = new Item(req.body);
      newItem.save((err, result) => {
        if (err) {
          return console.log(err);
        }
        res.send('Saved Item');
      });
    }
  });
};
module.exports.findItems = (req, res) => {
  Item.find({}).sort({ date: -1 })
    .then(result => {
      res.send(result);
    })
}
