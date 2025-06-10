function calculateArithmetic(a,b,type){
    if (type=="sum"){
        let val=sum(a,b);
        return val
    }
    else if(type=="minus"){
        let val=minus(a,b);
        return val
    }
}

function sum(a,b){
    let result=a+b;
    return result;
}

function minus(a,b){
    let result=a-b;
    return result;
}
const val=calculateArithmetic(1,2,"sum");
console.log(val);