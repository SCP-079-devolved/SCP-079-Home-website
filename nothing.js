import './JS/login test.js';

//active user to homepage
firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    var email = user.email;
    alert("Active user "+email);

  }else{
    alert("No Active user Found")
    window.location = 'login.html';
  }
})