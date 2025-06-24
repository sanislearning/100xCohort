const btns=document.querySelectorAll("button");
const input1=document.querySelector(".val1 input");
const input2=document.querySelector(".val2 input");
const resultBox=document.getElementById("realshit");

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


        axios.get(`/${endpoint}`,{
            params:{
                num1:val1,
                num2:val2
            }
        })
        .then(function(response){
            console.log("Server response:",response.data);
            resultBox.innerText=response.data.answer;
        })
        //Axios is probably an easier way to do this instead of regular fetch

        // axios.post(`${endpoint}`,{
        //     num1:val1,
        //     num2:val2
        // })
        // .then(function(response){
        //     console.log("Server response:",response.data);
        //     resultBox.innerText=response.data.answer;
        // })
        // .catch(function(error){
        //     console.error("Error: ",error);
        //     resultBox.innerText="Error!";
        // })
        //Supposed to catch any errors if they appear
    })
})