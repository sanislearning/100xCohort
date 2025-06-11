let arr1=[1,4,5,3,2];
let i=arr1[0];
for (let j=0;j<arr1.length;j++){
    if (arr1[j]>i){
        i=arr1[j];
    }
}
console.log(i);
