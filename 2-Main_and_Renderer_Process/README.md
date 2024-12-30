# Main & Renderer Process

In Electron, there are two main types of processes: the Main Process and the Renderer Process. These processes work together to build and manage your Electron application. Here's an explanation of each:

## Main Process

* <b>Role:</b> The main process is responsible for controlling the application lifecycle, managing native interactions, and creating Renderer Processes.

* <b>Characteristics:</b>
1. <b>Single Instance:</b> There is only one main process in an Electron application.
2. <b>Node.js and Electron APIs:</b> It has full access to Node.js modules and Electron's core APIs.
3. <b>Responsible for Windows:</b> The main process creates and manages the application windows (i.e., `BrowserWindow`).
4. <b>Communicates with Renderer Processes:</b> Uses IPC (Inter-Process Communication) to send and receive messages from Renderer Processes.

## Renderer Process

* <b>Role:</b> The renderer process is responsible for displaying the application's user interface and running web content (HTML, CSS, JavaScript).

* <b>Characteristics:</b>
1. <b>Multiple Instances:</b> Each `BrowserWindow` has its own renderer process.
2. <b>Sandboxed Environment:</b> By default, the renderer process runs in a secure environment similar to a web browser.
3. <b>Limited Access to Node.js:</b> Direct access to Node.js APIs is restricted unless explicitly enabled (`nodeIntegration`).
4. <b>Communicates with Main Process:</b> Uses IPC to send and receive messages from the main process.




