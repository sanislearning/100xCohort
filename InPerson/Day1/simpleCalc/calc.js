function sol(arg){
    //alert("Addition function called");
    let val1=document.getElementById("first").value;
    let val2=document.getElementById("two").value;
    let val=eval(val1+arg+val2)
    document.getElementById('answer').textContent=val;
}
//Eval isn't like a reccomended function to run since it will evaluate anything you give it