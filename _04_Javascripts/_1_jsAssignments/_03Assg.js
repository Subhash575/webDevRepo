/*
Q: Write a function that
Reads the contents of a file
Trims the extra space from the left and right
Writes it back to the file
*/

//callback approach:-
const fs = require("fs");
function cleanFile(filePath, cb) {
  fs.readFile(filePath, "utf-8", function (err, data) {
    data = data.trim();
    fs.writeFile(filePath, data, function () {
      cb();
    });
  });
}

function onDone() {
  console.log("file has been cleaned");
}
cleanFile("b.txt", onDone);

//work is done which is read and write the content of file

//Promisefied version:-
const fsa = require("fs");
function cleanFilePromiseFied(filePath) {
  return new Promise((resolve) =>
    fsa.readFile(filePath, "utf-8", (err, data) => {
      data = data.trim();
      fsa.writeFile(filePath, data, resolve);
    })
  );
}

function doneIt() {
  console.log("file has been cleaned promise approach my");
}

cleanFilePromiseFied("ex.txt").then(doneIt);
