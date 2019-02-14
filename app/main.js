const {app, BrowserWindow} = require('electron')
const path = require('path')

let win
let winOpt = {
  width: 1000,
  height: 700,
  center: true,
  minWidth: 700,
  minHeight: 600
}
app.on('ready', () => {
  win = new BrowserWindow(winOpt)
  win.webContents.loadFile(path.resolve(__dirname, './MDEditor.html'))
  win.once('ready-to-show', () => {
    win.show()
    win.webContents.openDevTools()
  })
  win.on('closed', () => {
    main = null
  })
})

app.on('window-all-closed', () => {
  app.quit()
})
