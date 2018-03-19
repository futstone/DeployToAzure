const mongoose = require('mongoose');
const tagsModel = mongoose.model('tags');

const tagslist = function(req, res) {
  //res.status(200).json("tag");
  tagsModel.find({}, function(err, result) {
    if (err) {
      res.status(404).json(err);
    } else {
      res.status(200).json(result);
    }
  })
};

const addtag = function(req, res) {
  //res.status(201).json("Add tag");
  tagsModel.create(req.body, function(err, newTag) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(201).json(newTag);
    }
  })
};

module.exports = {
  tagslist,
  addtag
};
