import { useEffect, useState } from "react";
import User from "./User";

function APIDemo(){
    // console.log("api demo rendered");
    let [users,setUsers]=useState([]);
    let [loading,setLoading]=useState(false);
    let [error,setError]=useState(null);
    // let [count,setCount]=useState(100);
    // const changeCount=()=>{
    //     setCount(count+1);
    // };
    // useEffect(()=>{
    //     console.log("Use Effect executed");
    // },[]);
      
    // console.log("API DEMO rerendered");

    // return(
    //     <div>
    //         <p>count:{count}</p>
    //      <button className='bg-amber-300 text-3xl p-3' onClick={changeCount} >changeCount</button>
    //      </div>
    // )
    useEffect(()=>{
        //a function to make API req
         console.log("api demo rerendered");
        async function getData() {
            try{
                //set loading to true
                setLoading(true);
                let res=await fetch("https://jsonplaceholder.typicode.com/posts")
                let usersList=await res.json();
                //update list
                setUsers(usersList);
            }catch(err){
                console.log("err is",err);
                //update error state
                  setError(err);
            }finally{
                setLoading(false);
            }
            
        }
        //call
        getData();
    },[])

    //deal with loading state
    if(loading){
        return <p className="text-center text-5xl">loading....</p>
    }
    //deal with error state
    if(error!=null){
        return <p className="text-center text-red-500 text-5xl">{error.message}</p>
    }
   
    return(
        <div className="text-center mt-10">
            <h1 className="text-8xl text-blue-600">List Of Users</h1>
            <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {users.map((user)=>(
                <div key={user.id}>
                    <p className="mb-3">{user.title}</p>
                    <p>{user.body}</p>
                </div>
            ))}
            </div>
            
        </div>
    )
}
export default APIDemo;