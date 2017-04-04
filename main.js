
const {app, BrowserWindow, globalShortcut, ipcMain} = require('electron')

const g = {
  win: null
}

ipcMain.on('async-message', function (e, arg) {
  e.sender.send('async-reply', 'bloop')
})

function createWindow () {
  g.win = new BrowserWindow({
    backgroundColor: '#eee',
    width: 800,
    height: 600,
    frame: false,
    icon: 'assets/icons/icon.png'
  })
  g.win.loadURL(`file://${__dirname}/index.html`)
  g.win.on('closed', () => {
    g.win = null
  })
}

app.on('ready', function () {
  createWindow()
  globalShortcut.register('F12', function () {
    g.win.webContents.toggleDevTools()
  })
})
app.on('will-quit', function () {
  globalShortcut.unregisterAll()
})
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', () => {
  if (g.win === null) {
    createWindow()
  }
})

exports.quitAll = () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
}
exports.minimize = () => {
  if (g.win) {
    g.win.minimize()
  }
}
exports.toggleMaximize = () => {
  if (g.win) {
    g.win.isMaximized() ? g.win.unmaximize() : g.win.maximize()
  }
}
