const path = require("path");
const os = require("os");
const { initializeDB } = require("./database/config");
initializeDB();

const { app, BrowserWindow, ipcMain } = require("electron");
const isDev = require("electron-is-dev");
const {
  default: installExtension,
  REDUX_DEVTOOLS,
} = require("electron-devtools-installer");
const events = require("./events");

let win;

if (require("electron-squirrel-startup")) {
  app.quit();
}

const createWindow = () => {
  win = new BrowserWindow({
    width: 1080,
    height: 720,
    minWidth: 300,
    minHeight: 300,
    frame: false,
    titleBarStyle: "hidden",
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    },
  });

  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  if (isDev) {
    win.webContents.openDevTools({ mode: "detach" });
  }
};

app.whenReady().then(() => {
  createWindow();
  installExtension(REDUX_DEVTOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log("An error occurred: ", err));
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
