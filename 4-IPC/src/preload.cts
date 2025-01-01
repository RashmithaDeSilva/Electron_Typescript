const electron = require("electron");


electron.contextBridge.exposeInMainWorld("electronAPI", {
    sendErrorDialog: () => electron.ipcRenderer.send("async-message"),
    onErrorDialogOpened: (callback: (message: string) => void) => {
        electron.ipcRenderer.on("async-reply", (_event, message) => {
            callback(message);
        });
    },
});