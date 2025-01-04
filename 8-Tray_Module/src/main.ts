import { app, Tray, Menu } from "electron";
import path from "path";


const template: Array<Object> = [
    {
        label: "Audio",
        submenu: [
            {
                label: "Low",
                type: "radio",
                checked: true
            },
            {
                label: "High",
                type: "radio"
            }
        ]
    },
    {
        label: "Video",
        submenu: [
            {
                label: "1280 x 720",
                type: "radio",
                checked: true
            },
            {
                label: "1920 x 1080",
                type: "radio"
            }
        ]
    }
];

app.on("ready", () => {
    const tray = new Tray(path.join(app.getAppPath(), "/electron.jpg"));
    tray.setContextMenu(Menu.buildFromTemplate(template));
    tray.setToolTip("Tary App");
});

