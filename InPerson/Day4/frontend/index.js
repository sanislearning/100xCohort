
document.querySelector(".buttoning").addEventListener("click",findMax);

async function findMax(){
    let a=document.getElementById("a").value;
    let b=document.getElementById("b").value;
    let c=document.getElementById("c").value;
    let d=document.getElementById("d").value;

    let url="http://localhost:3000/max/"+c+"?a="+a;

    const response=await axios.post(url,
        {
            b:b//body
        },
        {
            headers:{
                d:d //header
            }
        }
    )
    document.getElementById("store").innerText="Maximum value is: "+response.data;
};
