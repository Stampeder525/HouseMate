
import firebaseApp from './firebase.js';

module.exports = {
    createAccount: function(user_data) {
        firebaseApp.database().ref().push(user_data)
    }
}
