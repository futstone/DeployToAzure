const express = require('express');
const router = express.Router();

const ctrlNotes = require('../controllers/ctrlNotes');
const ctrlTags = require('../controllers/ctrlTags');

router.route('/notes').get(ctrlNotes.noteslist).post(ctrlNotes.addnote);

router.route('/tags').get(ctrlTags.tagslist).post(ctrlTags.addtag);

module.exports = router;
