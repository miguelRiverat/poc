'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

let DiagramSchema = new Schema({
  nodes: [{
    label: String,
    related: [String]
  }],
  origin: String,
  name: String  
})


module.exports = mongoose.model('Diagram', DiagramSchema)