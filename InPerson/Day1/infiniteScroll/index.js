function AddNew(){
    let newVal=document.createElement("div");
    newVal.innerHTML="This is a post" //Adds the text content
    newVal.style.cssText="padding: 30px;background-color: red;font-size: 30px;border: 1px solid black;"
    //Used to add styling
    document.getElementById("storage").appendChild(newVal);
    //rn what we are doing is that append the child to the empty div above the button, using it a storage
}

window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight-50) {
        //Height of the visible browser window + how much the user has scrolled
        //Compared to total height of the page -50px for faster triggering
        // you're at the bottom of the page
    AddNew()
    console.log("Bottom of page");
    }}

