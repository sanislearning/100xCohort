let human={
    name:"San",
    age:"20",
    profession:"student"
}

function Objectmeths(obj){
    console.log("Original Object: ",obj);

    let keys=Object.keys(obj);
    console.log("The object keys :" ,keys);

    let values=Object.values(obj);
    console.log("The object Values are :",values);

    let entries=Object.entries(obj);
    console.log("The object entries are :",entries);

    let hasProp=obj.hasOwnProperty("property"); //checks if object has a key that matches
    console.log("After hasOwnProperty ",hasProp);

    let newObj=Object.assign({},obj,{newProperty:"PropertyValue"});  //Adds new properties to objects
    console.log(newObj);
}

Objectmeths(human)