import { app, BrowserWindow, Menu, MenuItem, MenuItemConstructorOptions } from "electron";
import path from "path";


let mainWindow: BrowserWindow;
const template: Array<MenuItemConstructorOptions> = [
    {
        label: "Demo 1",
        click: () => {
            console.log("Aplication menu item click");
        }
    },
];

const ctxMenu = new Menu();
ctxMenu.append(new MenuItem({
    label: "Demo 2",
    click: () => {
        console.log("Context menu item click");
    }
}));
// @ts-ignore
ctxMenu.append(new MenuItem({ role: "selectall"}));

app.on("ready", () => {
    mainWindow = new BrowserWindow({
        width: 900,
        height: 600,
        show: false,
    });
    
    mainWindow.loadFile(path.join(app.getAppPath() + "/index.html"));
    mainWindow.on("ready-to-show", () => mainWindow.show());

    Menu.setApplicationMenu(Menu.buildFromTemplate(template));

    mainWindow.webContents.on("context-menu", (event, params) => {
        ctxMenu.popup({ 
            window: mainWindow, 
            x: params.x, 
            y: params.y 
        });
    });
});

