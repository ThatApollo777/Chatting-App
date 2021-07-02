"use strict"
let database = firebase.database();
function send() {
    let message = document.getElementById("message-text").value;
    console.log(message, database);
    database.ref('messages').push({
        'msg': message,
        'from': "Aadish"
    });
}