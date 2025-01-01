# IPC

## 1. Main Process (main.ts)
The main process handles the application lifecycle and system-level operations (e.g., creating windows, handling system dialogs). It listens for messages from the renderer process and performs actions accordingly.

<b>Key Concepts:</b>
* `ipcMain.on`: Listens for a specific IPC message from the renderer process.
* `event.sender.send`: Sends a response back to the renderer process.

<b>Code Flow:</b>
1. The `ipcMain.on("async-message")` listener waits for a message labeled `"async-message"` from the renderer process.
2. When the message is received:
    * It opens an error dialog using `dialog.showErrorBox`.
    * Sends a response (`"async-reply"`) back to the renderer process with a message `"Main process opened the error dialog"`.

<br><br>

## 2. Preloader Script (preload.cjs)
This script acts as a bridge between the renderer process and the Electron main process while maintaining context isolation for security.

<b>Key Concepts:</b>
* `contextBridge.exposeInMainWorld`: Exposes specific APIs from the main process to the renderer process securely.
* `ipcRenderer.send`: Sends a message from the renderer process to the main process.
* `ipcRenderer.on`: Listens for a response from the main process.

<b>Code Flow:</b>
1. The `sendErrorDialog` function sends the `"async-message"` IPC message to the main process.
2. The `onErrorDialogOpened` function listens for a response labeled `"async-reply"` from the main process and executes the provided callback function with the response message.

<br><br>

## 3. Renderer Process (index.ts)
The renderer process is responsible for rendering the user interface and interacting with the user.

<b>Key Concepts:</b>
* Event Listener: Captures user actions (e.g., button clicks).
* Calling Preloader APIs: Interacts with the main process via the exposed electronAPI.

<b>Code Flow:</b>
1. When the button with ID errorBtn is clicked:
    * It calls window.electronAPI.sendErrorDialog() to request the main process to open an error dialog.
    * Registers a callback with window.electronAPI.onErrorDialogOpened to handle the response from the main process.
2. When the response arrives, it logs the message to the console.

<br><br>

## 4. HTML (index.html)
The HTML provides the user interface, including a button (#errorBtn) that triggers the communication chain.

<br><br>

## Communication Flow
1. <b>Renderer Process:</b>
    * User clicks the "Display Error" button.
    * Sends `"async-message"` to the main process using `window.electronAPI.sendErrorDialog()`.

2. <b>Main Process:</b>
    * Receives `"async-message"`.
    * Displays an error dialog.
    * Sends back `"async-reply"` with a message.

3. <b>Renderer Process:</b>
    * Receives `"async-reply"`.
    * Logs the response message in the console.

<br><br>

## Security Highlights
* <b>Context Isolation</b>: Prevents untrusted code in the renderer process from directly accessing Node.js APIs.
* <b>Preloader Script</b>: Restricts exposed functionality to specific, secure APIs.
