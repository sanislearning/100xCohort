const fs=require('fs')
let users=['raman','harkirat','karthink','ridha'];
let ans=[];
let ansb=[];
for(let i=0;i<users.length;i++){
    if (users[i][0]=='r'){
        ans.push(users[i]);
    }
    else if(users[i][0]=='h'){
        ansb.push(users[i]);
    }
}
fs.writeFile('r.txt',ans.toString(),'utf-8',function(){
})
fs.writeFile('h.txt',ansb.toString(),'utf-8',function(){})
