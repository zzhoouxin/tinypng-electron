
const { app, BrowserWindow,ipcMain ,dialog,ipcRenderer} = require('electron');

function createWindow () {   
  // 创建浏览器窗口
  let win = new BrowserWindow({
    width: 600,
    height: 500,
    webPreferences: {
      nodeIntegration: true
    }
  })
  // 加载index.html文件
  win.loadFile('index.html')
}


app.on('ready', createWindow)
