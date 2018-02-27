const mongoose = require('mongoose');
const notesSchema = new mongoose.Schema({note:String, desc:String, tags:[String]});
const tagsSchema = new mongoose.Schema({tags:[String]});

mongoose.model('notes', notesSchema);
mongoose.model('tags', tagsSchema);
