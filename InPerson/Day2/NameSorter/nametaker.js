const axios=require("axios")
const fs=require('fs');
function NameTaker(){
    return axios.get("https://raw.githubusercontent.com/hkirat/names/refs/heads/main/a.json") //input the url inside this
    //you get back a response object from the url
    .then(response=>{
        return response.data; //we return the data here
    })
}

 NameTaker().then(val=>{
    console.log("Final Value:",val);
    ans=[];
    ansb=[];
    for(let i=0;i<val.names.length;i++){
    if (val.names[i][0]=='A'){
        ans.push(val.names[i]);
    }
    else if(val.names[i][0]=='B'){
        ansb.push(val.names[i]);
    }
    }
    fs.writeFile('r.txt',ans.toString(),'utf-8',function(){})
    fs.writeFile('h.txt',ansb.toString(),'utf-8',function(){})
})

