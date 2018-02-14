/* GET home page */
var taglist = function(req, res){
    res.render('tags',{
        tags:
        [
            'penguin', 'laurea', 'git', 'express', 'npm', 'mean', 'android', 'netbeans', 'javascript', 'java'
        ]});
};
module.exports = {
    taglist
};
