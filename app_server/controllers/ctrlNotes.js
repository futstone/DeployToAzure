const request = require('request');
const apiURL = require('./apiURLs');

const addData = function(req, res) {
  const path = '/api/notes';

  const postdata = {
    tags: req.body.tags.split(" "),
    note: req.body.note,
    desc: req.body.desc
  };

  const requestOptions = {
    url: apiURL.server + path,
    method: 'POST',
    json: postdata
  };

  request(
    requestOptions,
    function(err, response) {
        if (response.statusCode === 201) {
          res.redirect('/notes');
        } else {
          res.render('error', {message: 'Error adding data: ' +  response.statusMessage + ' (' + response.statusCode + ')'});
        }
    }
  );
};

const noteslist = function(req, res) {
  const path = '/api/notes';
  const requestOptions = {
    url: apiURL.server + path,
    method: 'GET',
    json: {},
    qs: {}
  };

  request(
    requestOptions,
    function(err, response, body) {
      if (err) {
        res.render('error', {message: err.message});
      } else if (response.statusCode !== 200) {
        res.render('error', {message: 'Error accessing API: ' + response.statusMessage + " ("+ response.statusCode + ")"});
      } else if (!(body instanceof Array)) {
        res.render('error', {message: 'Unexpected response data'});
      } else if (!body.length) {
        res.render('error', {message: 'No documents in collection'});
      } else {
        res.render('notes', {notes: body});
      }
    }
  );
};

// let noteslist = function(req, res){
//     res.render('notes',{
//         notes:
//         [
//             {note:'git add .', desc:'add all files to the staging area'},
//             {note:'\\n', desc:'..for newline!'},
//             {note:'Note 3', desc:'Description for note 3'},
//             {note:'Note 4', desc:'Description for note 4'},
//             {note:'Note 5', desc:'Description for note 5'}
//         ]});
// };
module.exports = {
    noteslist,
    addData
};
