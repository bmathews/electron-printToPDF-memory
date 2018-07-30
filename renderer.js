const { ipcRenderer } = require("electron");

// Uses 4gb of memory
function printToPDF() {
  ipcRenderer.send("print", {
    type: "pdf",
    file: "./markup.html"
  });
}

function print() {
  ipcRenderer.send("print", {
    type: "printer",
    file: "./markup.html"
  });
}

ipcRenderer.on("printed", (evt, payload) => {
  window.alert(`Printed ${JSON.stringify(payload)}`);
});

document.querySelector("#printToPDF").addEventListener("click", () => {
  printToPDF();
});


document.querySelector("#print").addEventListener("click", () => {
  print();
});

