function greet(){
    console.log("Hello");
}
function greetAlient(){
    console.log("Test to see what prints first");
}
setTimeout(greet,3*1000);
setTimeout(greetAlient,1*1000);