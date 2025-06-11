function findIndex(str,target){
    console.log("Original string: ",str);
    console.log("Index of target: ",str.indexOf(target));
}
findIndex("Hello world","world");
//Used to find index of where the word starts from

function findLastIndex(str,target){
    console.log("Original string: ",str);
    console.log("Index of target: ",str.lastIndexOf(target));
}
findLastIndex("Hello hello hello world world world","world");