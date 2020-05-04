
const { app, BrowserWindow,ipcMain ,dialog,ipcRenderer} = require('electron');

function createWindow () {
  // 创建浏览器窗口
  let win = new BrowserWindow({
    width: 600,
    height: 500,
    webPreferences: {
      nodeIntegration: true
    },
    allowRendererProcessReuse:false
    // frame: false
  })
  // 加载index.html文件
  win.loadFile('index.html')
}

app.allowRendererProcessReuse = true;

app.on('ready', createWindow)
