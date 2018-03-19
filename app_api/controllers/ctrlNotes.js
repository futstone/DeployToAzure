const mongoose = require('mongoose');
const notesModel = mongoose.model('notes');

const noteslist = function(req, res) {
  // res.status(200).json({"note" : "desc"});
  notesModel.find({}, function(err, result) {
    if (err) {
      res.status(404).json(err);
    } else {
      res.status(200).json(result);
    }
  })
};

const addnote = function(req, res) {
  // res.status(201).json({"Add note" : "work in progress"});
  notesModel.create(req.body, function(err, newNote) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(201).json(newNote);
    }
  })
};

module.exports = {
  noteslist,
  addnote
};
