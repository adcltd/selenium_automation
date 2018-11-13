'use strict';


var mongoose = require('mongoose'),
  Name = mongoose.model('Names');

exports.list_all_Names = function(req, res) {
  Name.find({}, function(err, name) {
    if (err)
      res.send(err);
    res.json(name);
  });
};




exports.create_a_name = function(req, res) {
  var new_name = new Name(req.body);
  new_name.save(function(err, name) {
    if (err)
      res.send(err);
    res.json(name);
  });
};


exports.read_a_name = function(req, res) {
  Name.findById(req.params.nameId, function(err, name) {
    if (err)
      res.send(err);
    res.json(name);
  });
};


exports.update_a_name = function(req, res) {
  Name.findOneAndUpdate({_id: req.params.nameId}, req.body, {new: true}, function(err, name) {
    if (err)
      res.send(err);
    res.json(name);
  });
};


exports.delete_a_name = function(req, res) {


  Name.remove({
    _id: req.params.nameId
  }, function(err, name) {
    if (err)
      res.send(err);
    res.json({ message: 'Name successfully deleted' });
  });
};