import { app, BrowserWindow, ipcMain, shell } from "electron";
import path from "path";


let mainWindow: BrowserWindow;

ipcMain.on("openFolder", (event) => {
    shell.showItemInFolder(path.join(app.getAppPath() + "/test-folder/test.txt"));
});

ipcMain.on("openItem", (event) => {
    const filePath = path.join(app.getAppPath(), "/test-folder/electron.jpg");
    const result = shell.openPath(filePath);
    result.then((err) => {
        if (err) {
            console.error("Failed to open file:", err);
        }
    });
});

ipcMain.on("openLink", (event) => {
    shell.openExternal("https://www.electronjs.org/");
});

app.on("ready", () => {
    mainWindow = new BrowserWindow({
        width: 900,
        height: 600,
        show: false,
        webPreferences: {
            preload: path.join(app.getAppPath(), "/dist/preload.cjs"),
            contextIsolation: true,
        },
    });
    
    mainWindow.loadFile(path.join(app.getAppPath() + "/index.html"));
    mainWindow.on("ready-to-show", () => mainWindow.show());
});

