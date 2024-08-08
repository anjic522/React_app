import { useState } from "react"
import { greetingfun } from "./hook3jsfunction";




const Showgreeting = () =>{
    const [greeting,setgreeting]=useState("");
    const greetinghandler = () =>{
 const greetstring = greetingfun();
 console.log(greetstring);
    };
    return(
<>
<h1>hello user</h1>
<button onClick={greetinghandler}>greetuser</button>

</>
    );
};
export default Showgreeting;