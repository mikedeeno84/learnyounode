var fs=require("fs");
var target=process.argv[2];
var content;
var file = fs.readFile(target, function(error, data){
	if(error){
		throw error.message;
	}
	content=data.toString().split("\n");
	console.log(content.length-1);
});