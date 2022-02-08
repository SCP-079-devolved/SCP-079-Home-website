// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyC7_Bp9ms-MeW1gDXciSAHLmIUMusnSsm4",
  authDomain: "scp-079-devolved.firebaseapp.com",
  projectId: "scp-079-devolved",
  storageBucket: "scp-079-devolved.appspot.com",
  messagingSenderId: "235107881289",
  appId: "1:235107881289:web:1ac489cad1506b353c4a98",
  measurementId: "G-09W47NH25M"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

function signed_out() {
  var login = document.getElementById("login");
  var signedin = document.getElementById("signedin");
  var success_msg = document.getElementById("success");

  signedin.style.display = "none";
  login.style.display = "block";

  success_msg.style.display = "none";
}

function signed_in(){
  var login = document.getElementById("login");
  var signedin = document.getElementById("signedin");
  

  signedin.style.display = "block";
  login.style.display = "none";
}



//signup function
function signUp() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  //
  promise.catch(e => alert(e.message));
  //alert("Signed Up Successfully");
}

//signIN function
function signIn() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));

    

  var success_msg = document.getElementById("success");
  success_msg.style.display = "block";
}


//signOut

function signOut() {
  auth.signOut();
  //alert("Signed Out Successfully from System");
}

//active user to homepage
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    var email = user.email;
    //alert("Active user " + email);
    signed_in();
  } else {
    signed_out();
    //alert("No Active user Found")
  }
})