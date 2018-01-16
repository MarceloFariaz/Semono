const electron = require('electron')
const path = require('path')
const url = require('url')
const BrowserWindow = electron.remote.BrowserWindow

const btnSettings = document.getElementById('btnSettings')
const btnOpenClose = document.getElementById('btnOpenClose')
const btnSend = document.getElementById('btnSend')

btnSettings.addEventListener('click', function(event) {

  let settingsWindow = new BrowserWindow({
    frame: false,
    alwaysOnTop: true,
    width: 640,
    height: 480
  })

  settingsWindow.on('close', function () { win = null })

  settingsWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'settings.html'),
    protocol: 'file:',
    slashes: true
  }))

  settingsWindow.show()
})
