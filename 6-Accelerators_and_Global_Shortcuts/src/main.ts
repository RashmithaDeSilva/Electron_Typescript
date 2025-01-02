import { app, BrowserWindow, Menu, shell, globalShortcut } from "electron";
import path from "path";


let mainWindow: BrowserWindow;
const template: Array<Object> = [
    {
        label: "Help",
        submenu: [
            {
                label: "About electron",
                click: () => {
                    shell.openExternal("https://www.electronjs.org/");
                },
                // You can define any shortcut keys you like
                // This only works on the user focusing on app time 
                // (If the user uses another app this does not work)
                accelerator: "CmdOrCtrl + Shift + H",
            },
        ],
    },
];

app.on("ready", () => {
    mainWindow = new BrowserWindow({
        width: 900,
        height: 600,
        show: false,
    });
    
    mainWindow.loadFile(path.join(app.getAppPath() + "/index.html"));
    mainWindow.on("ready-to-show", () => mainWindow.show());

    Menu.setApplicationMenu(Menu.buildFromTemplate(template));

    // Globle shortcut
    // This works when the app is running and the user focuses on another app work
    globalShortcut.register("Alt + 1", () => {
        mainWindow.show();
    });

    // Remove all global shortcuts after app close
    app.on("will-quit", () => {
        globalShortcut.unregisterAll();
    });
});

