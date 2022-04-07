const friendsModel = require('../model/friends.model');

function postFriend(req, res) {

    if (!req.body.name) {
        res.status(400).json({
            error: "Missing friend name"
        });
    }
    const newFriend = {
        name: req.body.name,
        id: friendsModel.length
    }

    friendsModel.push(newFriend);
    res.json(newFriend);
}

function getFriends(req, res) {
    res.json(friendsModel);
}

function getFriend(req, res) {
    const { id } = req.params;
    const friend = friendsModel[id - 1];
    if (friend) {
        res.status(200).json(friend);
    } else {
        res.status(404).json({
            error: "friend does nit exist"
        })
    }
}

module.exports = {
    postFriend,
    getFriend,
    getFriends
}
