const path = require('path'); //folder/file/jpg


function getMessages(req, res) {
    // res.sendFile( path.join(__dirname,'..', 'public', 'images', 'kong.jpg'));
    res.render('messages', {
        title: 'Messages to my friend',
        friend: 'elon Musk',
    });
}
function postMessages(req, res){
    console.log('updating messages...');
}

module.exports = {
    getMessages,
    postMessages
}