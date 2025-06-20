function addition(){
    //alert("Addition function called");
    let val1=document.getElementById("first").value;
    let val2=document.getElementById("two").value;
    let val=parseInt(val1)+parseInt(val2);
    document.getElementById('answer').textContent=val;

}
function subtract(){
    //alert("Subtraction function called");
    let val1=document.getElementById("first").value;
    let val2=document.getElementById("two").value;
    let val=parseInt(val1)-parseInt(val2);
    document.getElementById('answer').textContent=val;
}
function multiply(){
    //alert("Multiplication function called");
    let val1=document.getElementById('first').value;
    let val2=document.getElementById("two").value;
    let val=parseInt(val1)*parseInt(val2);
    document.getElementById('answer').textContent=val;
}
function divide(){
    //alert("Divide function called");
    let val1=document.getElementById('first').value;
    let val2=document.getElementById('two').value;
    let val=parseFloat(val1)/parseFloat(val2);
    document.getElementById('answer').textContent=val;
}