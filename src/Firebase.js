import * as firebase from 'firebase';


const config = {
  apiKey: "AIzaSyDtKNoLAbmWET6_r4rYuQmUtFbAXKBilVI",
  authDomain: "airbnbfronti.firebaseapp.com",
  databaseURL: "https://airbnbfronti.firebaseio.com",
  projectId: "airbnbfronti",
  storageBucket: "airbnbfronti.appspot.com",
  messagingSenderId: "223916993229"
  };



  export default firebase.initializeApp(config);