import { PostComponent } from "./post";

function App(){

  const posts=[{
    name:"Harkirat",
    subtitle:"11000 followers",
    time:"2m ago",
    image:"https://yt3.googleusercontent.com/C25u3DcSguL-wd3GaO110Q1fyO5ClTraTjtF72kJhZtpQwuAv3zLmb7K-ZLJecQQJBVvP1McmA=s900-c-k-c0x00ffffff-no-rj",
    description:"Want to know how to win big? Check outt how these folks won $6000 in bounties"
  }]
  function addPost(){


  }
  
  return (
    <div style={{background:"#dfe6e9",height:"100vh"}}>
      <button onClick={addPost}>Add post</button>
      <div style={{display:"flex",justifyContent:"center"}}>
        <div>
          {[<PostComponent 
            name={"Harkirat"}
            subtitle={"11000 followers"}
            time={"2m ago"}
            image={"https://yt3.googleusercontent.com/C25u3DcSguL-wd3GaO110Q1fyO5ClTraTjtF72kJhZtpQwuAv3zLmb7K-ZLJecQQJBVvP1McmA=s900-c-k-c0x00ffffff-no-rj"}
            description={"Want to know how to win big? Check outt how these folks won $6000 in bounties"}]}
          />
        </div>
      </div>
    </div>
  )
}