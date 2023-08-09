var firebaseConfig = {
    apiKey: "AIzaSyBEf3_aIUCzMhzqQwVd-cJhLBdrtybxyeA",
    authDomain: "twikiservidores.firebaseapp.com",
    databaseURL: "https://twikiservidores-default-rtdb.firebaseio.com",
    projectId: "twikiservidores",
    storageBucket: "twikiservidores.appspot.com",
    messagingSenderId: "386128151471",
    appId: "1:386128151471:web:ec5e396e0b07a2eac6e55a",
    measurementId: "G-KWRX5W7ELP"
  };

  firebase.initializeApp(firebaseConfig)
  userName = localStorage.getItem("userName");
  roomName = localStorage.getItem("roomName");

   function sair() {
    localStorage.removeItem("userName");
    localStorage.removeItem("roomName");
    window.location = "index.html";
   }

   function Enviar()
   {
    msg = document.getElementById("msg").value;
    firebase.database().ref(roomName).push({
        name:userName,
        message:msg,
        like:0
    });

    document.getElementsById("msg").value = "";
   }

   function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot)
   {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot)
    { childKey = childSnapshot.key;
        childData = childSnapshot.val();
        if(childKey != "purpose") {
            firebase_message_id = childKey;
            message_data = childData;
        }
    })
   })}