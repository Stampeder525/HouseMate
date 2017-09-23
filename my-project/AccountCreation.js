
import firebaseApp from './firebase.js';

var user_id

module.exports = {
    createAccount: function(user_data) {
        var uuid = require("uuid");
        user_id = uuid.v4();
        console.log(user_id);

        user_data.user_id = user_id

        var username = user_data.username
        delete user_data.username
        var usersRef = firebaseApp.database().ref().child("users")
        usersRef.child(username).set(user_data)
    }
}

exports.user_id = user_id
