var firebaseConfig = {
    apiKey: "AIzaSyBmQ-LZKmRAy5u_6byeRrmxfFl-1f7CZaw",
    authDomain: "classtest-716d4.firebaseapp.com",
    databaseURL: "https://classtest-716d4-default-rtdb.firebaseio.com",
    projectId: "classtest-716d4",
    storageBucket: "classtest-716d4.appspot.com",
    messagingSenderId: "560604630738",
    appId: "1:560604630738:web:e5eb3ba66b99c2e3cd270b",
    measurementId: "G-X3FJYXGDYV"
  };
  
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
 });

}