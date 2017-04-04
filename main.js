
const {app, BrowserWindow, globalShortcut} = require('electron')

const g = {
  win: null
}

function createWindow () {
  g.win = new BrowserWindow({
    backgroundColor: '#eee',
    width: 800,
    height: 600
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
