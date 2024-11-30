// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhQpKborRk34NIpJ5X40lBoCRLuEZDhV4",
  authDomain: "enterprise-hotspot.firebaseapp.com",
  projectId: "enterprise-hotspot",
  storageBucket: "enterprise-hotspot.appspot.com",
  messagingSenderId: "567950282051",
  appId: "1:567950282051:web:68438ae5cf21c281aff3f6",
};

let db;
window.addEventListener("load", function () {
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  console.log(app, firebase.firestore());
  db = app
    .firestore()
});
