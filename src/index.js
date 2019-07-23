'use strict';
const { ipcRenderer } = require('electron');


var closeApp = document.querySelector('.close');
let Data = {
    message: "Hi",
    someData: "Let's go"
};

closeApp.addEventListener('click', function() {
    console.log("Cerrando");
    ipcRenderer.send('close-app-action', Data);
});