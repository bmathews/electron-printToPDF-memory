const { ipcRenderer } = require("electron");

// Uses 4gb of memory
function printToPDF() {
  const jobID = Math.random();
  ipcRenderer.send("print", {
    type: "pdf",
    file: "./markup.html"
  });
}

function print() {
  const jobID = Math.random();
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

