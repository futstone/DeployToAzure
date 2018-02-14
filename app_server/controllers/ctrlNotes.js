/* GET home page */
let noteslist = function(req, res){
    res.render('notes',{
        notes:
        [
            {note:'git add .', desc:'add all files to the staging area'},
            {note:'\\n', desc:'..for newline!'},
            {note:'Note 3', desc:'Description for note 3'},
            {note:'Note 4', desc:'Description for note 4'},
            {note:'Note 5', desc:'Description for note 5'}
        ]});
};
module.exports = {
    noteslist
};
