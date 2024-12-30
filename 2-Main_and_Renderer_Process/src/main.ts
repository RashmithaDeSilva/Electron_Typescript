console.log("main process");
import { app, BrowserWindow } from "electron";


let mainWindow: BrowserWindow;
app.on("ready", createWindows);


function createWindows(): void {
    mainWindow = new BrowserWindow({
        width: 900,
        height: 600,
        show: false
    });

    mainWindow.loadFile("./index.html");
    mainWindow.on("ready-to-show", () => mainWindow.show());
}
