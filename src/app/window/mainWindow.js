
module.exports = function(BrowserWindow, url, path){
    this.mainWindow = new BrowserWindow();

    this.startWindow = function(){
        this.mainWindow.loadURL(
            url.format({
                pathname: path.join(__dirname, "../../ui/pages/main.html"),
                protocol: "file:",
                slashes: true
            })
        );
    }
};

