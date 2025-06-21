const fs=require("fs");

let data=fs.readFileSync("info.txt",'utf-8');
console.log(data);
console.log('hello boss')
fs.readFile("info.txt","utf-8",function(err,data){
    console.log(data);
})