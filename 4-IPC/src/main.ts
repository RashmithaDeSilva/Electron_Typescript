import { app, BrowserWindow, ipcMain, dialog } from "electron";
import path from "path";


let mainWindow: BrowserWindow;

ipcMain.on("async-message", (event) => {
    dialog.showErrorBox("Error", "Error opened through the IPC!");
    // Send a response back to the renderer process
    event.sender.send("async-reply", "Main process opened the error dialog");
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

