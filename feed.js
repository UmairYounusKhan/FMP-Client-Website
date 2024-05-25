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

function submitfeed(){
    var Ffname = document.getElementById("Ffname");
    var Flname = document.getElementById("Flname");
    var Femail = document.getElementById("Femail");
    var Fnumber = document.getElementById("Fnumber");
    var Fcomment = document.getElementById("Fcomment");
    var Fremember = document.getElementById("Fremember");
    var idd = Date.now().toString(25)

    var objj = {
        key:idd,
        firstname:Ffname.value,
        lastname:Flname.value,
        email:Femail.value,
        number:Fnumber.value,
        comment:Fcomment.value,
        remember:Fremember.value
    }

    firebase.database().ref("userfeedback/" + idd).set(objj);
    
}

