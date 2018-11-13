'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var NameSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter your first name'
  },
  Created_date: {
    type: Date,
    default: Date.now,
    required: 'Kindly enter your DOB'
  },
  email: {
      type: String,
      required: 'Kindly enter your emial address'
  },
  telephone: {
    type: Number,
    required: 'Kindly enter your telephone number'
  }
});

module.exports = mongoose.model('Names', NameSchema);