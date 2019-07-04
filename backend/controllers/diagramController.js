'use strict'

const model = require('../models/diagramModel');

let show = (req, res) => {
  return model.find({})
    .then(records => {
      console.log(records)
      return res.send(records)
    })
    .catch(err => res.send(err))
}

module.exports = {
  show
}