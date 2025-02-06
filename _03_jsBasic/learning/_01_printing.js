//code can compile in terminal using this command: node part1/printing.js
console.log("Hello");
console.log("chai");
//The problem with second way of print use process it their is no inbuild
//nextline generated
process.stdout.write("chai");
process.stdout.write("chai");

// when we write console. then their is more option which we can select.
//Below code is use for table.
console.table({city: "test"});

//another option: which do somekind of fancy printing it useful in Browser.
console.warn({city: "Jaipur"});
