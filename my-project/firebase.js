
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "<AIzaSyCOu-mcN33f5HchJHIAVQRRkBS7xsiDK2I>",
  authDomain: "housemate-ea772.firebaseapp.com",
  databaseURL: "https://housemate-ea772.firebaseio.com",
  storageBucket: "housemate-ea772.appspot.com",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);


export default firebaseApp;
