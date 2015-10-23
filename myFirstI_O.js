var fs=require("fs");
var target=process.argv[2];
var file =fs.readFileSync(target).toString();
fileArray=file.split("\n");
console.log(fileArray.length-1);
