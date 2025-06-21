const axios=require("axios")

function NameTaker(){
    const res = axios.get("https://raw.githubusercontent.com/hkirat/names/refs/heads/main/a.json") //input the url inside this
    //you get back a response object from the url
        return res.then(response=>response.data) //extracts resposnse from the https response
        .then(data =>console.log(data)) // logs the actual data
        .catch(error=>{
            console.error(error);
        });

}
NameTaker().then(val=>{
    console.log('final val:,val')})