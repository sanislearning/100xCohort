const allUsers=[
    {
        firstName:"San",
        gender:"male"
    },
    {
        firstName:"Sana",
        gender:"female"
    },
    {
        firstName:"Roy",
        gender:"male"
    }
]
for (let i=0;i<allUsers.length;i++){
    if(allUsers[i]["gender"]=="male"){
        console.log(allUsers[i].firstName);
    }
}