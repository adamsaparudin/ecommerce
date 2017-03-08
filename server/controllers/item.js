let Item = require('../models/item')

create = (req, res, next) => {
  let doc = new Item(req.body)
  doc.save().then(function(data) {
    res.send(data)
  }).catch(function(err) {
    res.send(err)
  })
}

read = (req, res, next) => {
  Item.find({}).exec((err, docs) => {
      if(err) res.send(err)
      res.json(docs)
  })
}

update = (req, res, next) => {
  Item.findById(req.params.id, (err, doc) => {
    if (err) res.send(err)
    else {
      doc.update(req.body, (error, data) => {
        if(error) res.send(error)
        else res.send(data)
      })
    }
  })
}

deleteItem = (req, res, next) => {
  Item.remove({_id : req.params.id}, (err, doc) => {
    if (err) res.send(err)
    else res.send(doc)
  })
}

search = (req, res, next) => {
  // let query = new RegExp(`${req.params.query}`)
  Item.find({name: {$regex: req.params.query, $options: "i"}})
  .then(function(docs) {
    res.json(docs)
  })
  .catch(function(err) {
    console.log(err);
  })
}

module.exports = {
  create: create,
  read: read,
  update: update,
  deleteItem: deleteItem,
  search: search
}
