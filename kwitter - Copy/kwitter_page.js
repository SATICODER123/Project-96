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

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}