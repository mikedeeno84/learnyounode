var num=0;
var args=process.argv.slice(2);
args.forEach(function(o){num+=parseInt(o);})
console.log(num);