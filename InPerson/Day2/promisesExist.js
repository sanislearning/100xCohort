//asynchronous programming
const promise=new Promise((resolve,reject)=>{
    let success=true;
    setTimeout(()=>{
        if (success){
            resolve("Data loaded");
        }
        else {
            reject("Error occured");
        }
    },1000);
});

promise
    .then(result=>{
        console.log("Success:", result);
    })
    .catch(error=>{
        console.log("Failed:",error);
    });