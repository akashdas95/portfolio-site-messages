const firebaseConfig = {
    apiKey: "AIzaSyDw_4dX1Sco4iJU5DxTINJZvZKkTs4kRJs",
    authDomain: "portfolio-site-contact-f-9191a.firebaseapp.com",
    databaseURL: "https://portfolio-site-contact-f-9191a-default-rtdb.firebaseio.com",
    projectId: "portfolio-site-contact-f-9191a",
    storageBucket: "portfolio-site-contact-f-9191a.appspot.com",
    messagingSenderId: "957959410541",
    appId: "1:957959410541:web:343d2cc5db1a7378e70064",
    measurementId: "G-KQ8H3JTPZ2"
};

firebase.initializeApp(firebaseConfig);

let messagesRef = firebase.database().ref("messages");



document.getElementById("getMessage"),addEventListener("click", getMessage);
let showMessage = document.getElementById("showMessage");


async function getMessage(){
    let message = `all messages`
    await messagesRef.once("value", (snapshots)=>{
      snapshots.forEach((snapshot)=>{
      message += `
        <h2> ${snapshot.val().name} </h2>
        <h3> ${snapshot.val().email} </h3>
        <p> ${snapshot.val().message} </p>
       `
     })

     showMessage.innerHTML = message;
     message.style.color = `red`;
   })   
}

