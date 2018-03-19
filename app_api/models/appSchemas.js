const mongoose = require('mongoose');
const notesSchema = new mongoose.Schema({note:String, desc:String, tags:[String]});
const tagsSchema = new mongoose.Schema({text:String});

mongoose.model('notes', notesSchema, 'notes');
mongoose.model('tags', tagsSchema, 'tags');
