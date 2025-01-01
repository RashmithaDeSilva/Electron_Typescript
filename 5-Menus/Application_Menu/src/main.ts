import { app, BrowserWindow, Menu, shell } from "electron";
import path from "path";


let mainWindow: BrowserWindow;
const template: Array<Object> = [
    {
        label: "Demo",
        submenu: [
            {
                label: "submenu 1",
                click: () => {
                    console.log("Click submenu 1");
                }
            },
            // {
            //     type: "separator"
            // },
            {
                label: "submenu 2"
            },
        ],
    },
    {
        label: "Help",
        click: () => {
            shell.openExternal("https://www.electronjs.org/");
        }
    },
    {
        label: "Edit",
        submenu: [
            { role: "undo" },
            { role: "redo" },
            { type: "separator" },
            { role: "cut" },
            { role: "copy" },
            { role: "paste" },
            { role: "pasteandmatchstyle" },
            { role: "delete" },
            { role: "selectall" },
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
});

