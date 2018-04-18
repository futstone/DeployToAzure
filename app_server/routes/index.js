const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/ctrlMain');
const ctrlNotes = require('../controllers/ctrlNotes');
const ctrlTags = require('../controllers/ctrlTags');

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/notes', ctrlNotes.noteslist);
router.get('/tags', ctrlTags.taglist);
router.route('/notes').post(ctrlNotes.addData);

module.exports = router;
