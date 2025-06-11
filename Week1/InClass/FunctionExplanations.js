function calculateArithmetic(a,b,arithmeticFinalFunction){
    let ans=arithmeticFinalFunction(a,b);
    return ans;
}
function sum(a,b){
    return a+b;
}
const value=calculateArithmetic(1,2,sum);
console.log(value)