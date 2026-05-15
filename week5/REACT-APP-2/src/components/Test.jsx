import { useState } from "react";

function Test(){
const[user,setUser]=useState({username:"Akshitha",age:20,city:"hyderabad"});
const[marks,setMarks]=useState([30,35,32]);

//update user state
const updateUser=()=>{
    setUser({...user,username:"chikku"});
}
const updateMarks=()=>{
    setMarks([...marks,40]);
}

return(
    <div className="text-4xl">
        <p >username:{user.username}</p>
        <p>age:{user.age}</p>
        <p>city:{user.city}</p>
        <button onClick={updateUser}>Update User</button>
        <p>Marks:{marks}</p>
        <button onClick={updateMarks}>Update Marks</button>

    </div>
)
}
export default Test;