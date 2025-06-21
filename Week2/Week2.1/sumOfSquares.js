function squaring(a){
    let val=a*a;
    return val;
}
function cube(a){
    let val=a*a*a;
    return val;
}
function quad(a){
    let val=a*a*a*a;
    return val;
}
function sumOf(a,b,func){
    let val1=func(a);
    let val2=func(b);
    return val1+val2;
}
let ans=sumOf(3,4,quad);
console.log(ans);

//Remember DRY
//DON'T REPEAT YOURSELF