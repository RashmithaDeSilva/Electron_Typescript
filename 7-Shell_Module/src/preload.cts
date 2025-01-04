export interface ElectronAPI {
    openFolder: () => void;
    openItem: () => void;
    openLink: () => void;
}

declare global {
    interface Window {
        electronAPI: ElectronAPI;
    }
}

const electron = require("electron");

electron.contextBridge.exposeInMainWorld("electronAPI", {
    openFolder: () => electron.ipcRenderer.send("openFolder"),
    openItem: () => electron.ipcRenderer.send("openItem"),
    openLink: () => electron.ipcRenderer.send("openLink"),
});