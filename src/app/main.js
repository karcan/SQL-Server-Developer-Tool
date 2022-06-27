const electron = require("electron");
const url = require("url");
const path = require("path");
const { app, BrowserWindow } = electron;

let mainWindow = require('./window/mainWindow');

app.on('ready', () => {
    let newMainWindow = new mainWindow(BrowserWindow, url, path);
    newMainWindow.startWindow();
});