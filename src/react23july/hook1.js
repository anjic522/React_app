import { useState } from "react";




const Example = ()=>{
    const[login,setlogin]=useState(false)
    const loginhandler=()=>{
    //  setlogin((login)=>!login)
     setlogin(!login)
    }
    return(
        <>
        <h1>hook</h1>
        {login?<h1>welcome user</h1>:<h1>please login</h1>}
        <button onClick={loginhandler}>click</button>
        </>
    );
};
export default Example;