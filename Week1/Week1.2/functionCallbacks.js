function sum(a,b,fnToCall){
    let result=a+b;
    fnToCall(result);
}

function displayResult(data){
    console.log("Result of the sum is: "+data);
}

function displayResultPassive(data){
    console.log("Sum's result is "+data);
}

//You are only allowed to do a single function all after this
//How will you displayResult of a sum
const ans=sum(1,3,displayResult);