 var firebaseConfig = {
    apiKey: "AIzaSyDz9TDA2zKSPIRUfjBir1MhdAAqbceehzs",
    authDomain: "fmp-client-website-827ba.firebaseapp.com",
    databaseURL: "https://fmp-client-website-827ba-default-rtdb.firebaseio.com",
    projectId: "fmp-client-website-827ba",
    storageBucket: "fmp-client-website-827ba.appspot.com",
    messagingSenderId: "850949060966",
    appId: "1:850949060966:web:709b52de0af171522ef0a7",
    measurementId: "G-WBWWQQP4WJ"
  };

  // Initialize Firebase
  var app = firebase.initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);


function submitcontact(){
    var Cname = document.getElementById("Cname");
    var Cnumber = document.getElementById("Cnumber");
    var Ccomment = document.getElementById("Ccomment");
    var Cremember = document.getElementById("Cremember");
    var id = Date.now().toString(35)


    var obj ={
        key:id,
        name:Cname.value,
        number:Cnumber.value,
        comment:Ccomment.value,
        remember:Cremember.value
    }

    firebase.database().ref("user/" + id).set(obj);



}


