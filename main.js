const { app, BrowserWindow } = require('electron')
const { mainMenu } = require('./src/js/appMenu')

const createWindow = () => {
    const win = new BrowserWindow({
        icon:'src/img/tree.png',
        width: 800,
        height: 600,
    })

    //win.maximize();
    win.loadFile('src/index.html')
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
          createWindow();
        }
    });
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})