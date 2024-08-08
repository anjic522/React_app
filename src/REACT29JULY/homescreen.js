import { useEffect, useState } from "react";
import  Navbar  from "./navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import Findrecipes from "./dropdown";
import { Recipecontext } from "./navigation";

const Userscreen =()=>{

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
<Navbar/>
<Findrecipes/>
          <h1 style={{textAlign:"center" ,color:"green"}}>RECIPELIST</h1>
          <div className="parent">
          {
            recipelist.map(eachrecipe=>{
               
                const{name,image,rating,ingredients,id,cuisine}=eachrecipe;
                
                return(
                    <div  key={eachrecipe.id} className="child">
                         <img src={image} width={"100%"} height={200}></img>
                         <h5>Name:{name}</h5>
                         <h5>Ingredients:{ingredients}</h5>
                         <h5>Rating:{rating}</h5>
                         <h5>Cuisine:{cuisine}</h5>
                         <button className="button"><Link  to={`/recipes/${cuisine}/${id}`}>see more</Link></button>



                        </div>


                )
            
            })
          }
          </div>
        </div>
    )
}
export default Userscreen;
