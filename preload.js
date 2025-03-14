const { contextBridge, ipcRenderer } = require('electron');

// Expose specific API to the renderer process
contextBridge.exposeInMainWorld('electron', {
    sendLoadUrl: (url) => ipcRenderer.send('load-url', url),
    sendNavigateBack: () => ipcRenderer.send('navigate-back'),
    sendNavigateForward: () => ipcRenderer.send('navigate-forward')
});