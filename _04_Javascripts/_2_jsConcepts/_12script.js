/*
# rejects in promises
*/

const fs = require("fs");
function readFileAsync() {
  return new Promise(function (resolve, reject) {
    fs.readFile("./_04_Javascripts/a.txt", "utf-8", function (err, data) {
      if (err) {
        reject("file not found");
      } else {
        resolve(data);
      }
    });
  });
}

readFileAsync()
  .then(function (x) {
    console.log("file has been read: " + x);
  })
  .catch(function (e) {
    console.log("Error:");
    console.log(e);
  });
