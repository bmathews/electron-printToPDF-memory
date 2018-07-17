const path = require("path");
const { BrowserWindow } = require("electron").remote;
const fs = require("fs");

// create bw and load markup.html
function createAndLoad() {
  return new Promise(resolve => {
    const bw = new BrowserWindow();
    bw.webContents.loadFile("./markup.html");
    bw.webContents.on("did-finish-load", () => resolve(bw));
  });
}

// Uses 4gb of memory
function printToPDF() {
  createAndLoad().then(bw => {
    bw.webContents.printToPDF({}, (err, data) => {
      bw.close();
      const outPath = path.join(__dirname, "out.pdf");
      fs.writeFile(outPath, data);
      window.alert(`Generated pdf at ${outPath}`);
    });
  });
}

// No excess memory when manually saving as pdf
function print() {
  createAndLoad().then(bw => {
    bw.webContents.print({}, () => {
      bw.close();
      window.alert("Printed");
    });
  });
}

document.querySelector("#printToPDF").addEventListener("click", () => {
  printToPDF();
});

document.querySelector("#print").addEventListener("click", () => {
  print();
});
