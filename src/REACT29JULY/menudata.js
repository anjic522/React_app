





import { useEffect, useState } from "react";
import  Navbar  from "./navbar";
import axios from "axios";






const Menuscreen =()=>{
const [recipelist,setrecipelist]=useState([])
    useEffect(()=>{
        fetchrecipes();
    } ,[])



 const fetchrecipes = async()=>{
    try{
        const {status,data}=await axios.get("https://dummyjson.com/recipes");
        if(status===200){
            setrecipelist(data.recipes);
            console.log(data)
        }
    }catch (error){}
 }



    return(
        <div >

          <h1 style={{textAlign:"center", color:"blue"}}>RECIPELIST</h1>
          <div className="parent">
          {
            recipelist.map(eachrecipe=>{
               
                const{name,image,rating,ingredients}=eachrecipe;
                
                return(
                    <div  key={eachrecipe.id} className="child">
                         <img src={image} width={"100%"} height={200}></img>
                         <h5>Name:{name}</h5>
                        



                        </div>


                )
            
            })
          }
          </div>
        </div>
    )
}
export default Menuscreen;