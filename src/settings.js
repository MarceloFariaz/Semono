const electron = require('electron')
const path = require('path')
const remote = electron.remote

const btnReturn = document.getElementById('btnReturn')

btnReturn.addEventListener('click', function(event) {
    var window = remote.getCurrentWindow();
    window.close();
})
