
const ipc = require('electron').ipcRenderer
const BrowserWindow = require('electron').remote.BrowserWindow
const path = require('path')

const asyncMsgBtn = document.getElementById('bleep')
const counter = document.getElementById('counter2')

asyncMsgBtn.addEventListener('click', function () {
  ipc.send('async-message', 'bleep')
})

ipc.on('async-reply', function (event, arg) {
  const message = `Reply: ${arg}`
  window.alert(message)
})

counter.parentNode.addEventListener('click', function () {
  const windowID = BrowserWindow.getFocusedWindow().id
  const iPath = 'file://' + path.join(__dirname, './invis.html')
  let iwin = new BrowserWindow({width: 400, height: 400, show: false})
  iwin.loadURL(iPath)

  iwin.webContents.on('did-finish-load', function () {
    console.log('begin count')
    iwin.webContents.send('get-next-int', windowID)
  })
})

ipc.on('return-next-int', function (event, result) {
  counter.innerHTML = result
})
