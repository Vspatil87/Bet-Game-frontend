const { app, BrowserWindow, ipcMain, ipcRenderer } = require('electron');
const url = require("url");
const path = require("path");
const io = require('socket.io-client');
let socket = io.connect('http://localhost:8000/');
let mainWindow;
// socket.on('connect', function () { });
// socket.on('disconnect', function () { });
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      enableRemoteModule: true,
      // contextIsolation: false,
    }
  })

  urlObject = {
    pathname: path.join(__dirname, `/dist/bet-ui/index.html`),
    protocol: "file:",
    slashes: true
  }
  mainWindow.loadURL(
    url.format(urlObject)
  );

  ipcMain.on('set-title', (event, title) => {
    const webContents = event.sender
    const win = BrowserWindow.fromWebContents(webContents)
    socket.emit('get-data', title);
    win.setTitle(title);
  })

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })

  ipcMain.on('save', (event, data) => {
    console.log(data);
    event.sender.send("sigin", "Test electron");
  });
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})