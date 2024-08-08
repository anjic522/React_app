import { useRef, useState } from "react";




function Uncontolforms(){
    const email=useRef();
    const password=useRef();
    const [error,setError] = useState(null);
    const submithandler=(event)=>{
        event.preventDefault();
        const emailenterd=email.current.value;
        const passwordenterd=password.current.value;
        console.log(emailenterd,passwordenterd,"user datails")
if(emailenterd.length <20 && passwordenterd.length <20){
    setError(null);
successsubmit(emailenterd,passwordenterd);

}else{
    setError("please enter less than 20 charecters");
}
    }
const successsubmit = async (username,password) =>{
    // alert("success");
    try{
   const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          
          username: username,
          password: password,
          expiresInMins: 30, // optional, defaults to 60
        })
      })
      const finalresponse = await response.json();
      console.log(finalresponse,"")
    }catch (err){

    }

};
    return(
            
        
<>
<form  onSubmit={submithandler}>
  <div className="mb-3 mt-3">
    <label htmlFor="email" className="form-label">
      Email:
    </label>
    <input
      type="text"
      className="form-control"
      id="email"
      placeholder="Enter email"
      name="email"
      ref={email}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="pwd" className="form-label">
      Password:
    </label>
    <input
      type="password"
      className="form-control"
      id="pwd"
      placeholder="Enter password"
      name="pswd"
      ref={password}
    />
  </div>
  {error && <span style={{color:"red"}}>{error}</span>}
  <div className="form-check mb-3">
    {/* <label className="form-check-label">
      <input className="form-check-input" type="checkbox" name="remember" />{" "}
      Remember me
    </label> */}
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form></>

    
    )
}
export default Uncontolforms;