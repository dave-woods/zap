
const ipc = require('electron').ipcRenderer
const BrowserWindow = require('electron').remote.BrowserWindow
const path = require('path')

const asyncMsgBtn = document.getElementById('bleep')

asyncMsgBtn.addEventListener('click', function () {
  ipc.send('async-message', 'bleep')
})

ipc.on('async-reply', function (event, arg) {
  const message = `Reply: ${arg}`
  window.alert(message)
})
