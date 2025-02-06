//(v.imp)A Promise excepts a function that performs an actual asynchoronus task.
//Once the asynchoronus task is compelete, call the arugment of that function passing
//the data obtained from the asynchronous task.
//That data will then be passed to the function you define in '.then'

/*
Q: Write a function that
Reads the contents of a file asynchoronusly
*/

//one way: To write easiest:-

const fs = require("fs");
//try to correct below approach:-
function gettingFile(filePath, fn) {
  fs.readFile(filePath, "utf-8", function (err, data) {
    if (err) console.log("There is error");
    else fn(data);
  });
}

function promiseFiedReadFile(filePath) {
  return new Promise(gettingFile(filePath));
}

//another way:-
// function promiseFiedReadFile(filePath) {
//   return new Promise((resolve) =>
//     fs.readFile(filePath, "utf-8", (err, data) => {
//       if (err) console.log("Error");
//       else resolve(data);
//     })
//   );
// }

function fileReadDone(content) {
  console.log(content);
  console.log("File is read.");
}

promiseFiedReadFile("eg.txt").then(fileReadDone);

//see js _03Assg file for more better understanding.
