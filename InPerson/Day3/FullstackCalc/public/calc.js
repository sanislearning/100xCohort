const btns=document.querySelectorAll("button");
const input1=document.querySelector(".val1 input");
const input2=document.querySelector(".val2 input");
const resultBox=document.getElementById("readshit");

btns.forEach(function(btn){
    btn.addEventListener("click",function(){
        const val1=input1.value;
        const val2=input2.value;

        let operator=btn.textContent;
        let endpoint="";

        if (operator==='+') endpoint='sum';
        if (operator==='-') endpoint='sub';
        if (operator==='*') endpoint='mult';
        if (operator==="/") endpoint='div';

        fetch(`/${endpoint}`,{
            method:"POST", //tells the server that we are sending a POST request
            headers:{
                "Content-Type":"application/json" //Tells what kind of content you are sending the server
            },
            body:JSON.stringify({ //converts the two numbers into a JSON string
                num1:val1,
                num2:val2
            })
        })
        .then(function(res){  //waits for server to respond
            return res.json(); //converts raw http response into JSON
        })
        .then(function(data){
            resultBox.innerText=data.answer; //Once we get the response, get the data.answer, put in display element
        })
        .catch(function(err){
            resultBox.innerText="Error";
            console.error(err);
        })
    })
})