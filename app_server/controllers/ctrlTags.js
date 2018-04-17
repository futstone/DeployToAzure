const request = require('request');
const apiURL = require('./apiURLs');

const taglist = function(req, res) {
  const path = '/api/tags';
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
        res.render('tags', {tags: body});
      }
    }
  );
};

// var taglist = function(req, res){
//     res.render('tags',{
//         tags:
//         [
//             'penguin', 'laurea', 'git', 'express', 'npm', 'mean', 'android', 'netbeans', 'javascript', 'java'
//         ]});
// };
module.exports = {
    taglist
};
