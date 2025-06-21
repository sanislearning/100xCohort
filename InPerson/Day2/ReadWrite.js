//Write a program that removes all the spaces from a file, removes all spaces from it, writes back to the file
const fs=require("fs")
fs.readFile('info.txt','utf-8',function(err,data){
    let store="";
    for(let i=0;i<data.length;i++){
        if (data[i]!=" "){
            store+=data[i];
        }
    }
    fs.writeFile('empt.txt',store, 'utf8', (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('File written successfully!');
    });
    setTimeout(fn=>{
        fs.readFile('empt.txt','utf-8',function(err,data){
        console.log(data);
})
},5000)
})

//concat creates a new string every single time so since I want store to be filled
//I used += instead, that works pretty decently well
