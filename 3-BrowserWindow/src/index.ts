import { app, BrowserWindow } from "electron";


let mainWindow: BrowserWindow;
let parentWindow: BrowserWindow, childWindow: BrowserWindow;
let remoteWindow: BrowserWindow;


// app.on("ready", createWindowsType1);
// app.on("ready", createWindowsType2);
app.on("ready", createWindowsType3);


function createWindowsType1(): void {
    mainWindow = new BrowserWindow({
        width: 900, // defaul 800
        height: 700, // defaul 600
        maxWidth: 1200,
        maxHeight: 900,
        show: false
    });

    mainWindow.loadFile("./index.html");
    mainWindow.on("ready-to-show", () => mainWindow.show());
}

function createWindowsType2(): void {
    parentWindow = new BrowserWindow({
        title: "Parent"
    });
    childWindow = new BrowserWindow({
        parent: parentWindow,
        title: "Child",
        modal: true // will disable Parent Window
    });

    parentWindow.loadFile("./index.html");
    parentWindow.on("ready-to-show", () => parentWindow.show());
}

function createWindowsType3(): void {
    remoteWindow = new BrowserWindow({
        title: "Remote",
        show: false, // Avoid URL website load daily
    });

    remoteWindow.loadURL("https://github.com/RashmithaDeSilva/Electron_Typescript");
    remoteWindow.on("ready-to-show", () => remoteWindow.show());
}