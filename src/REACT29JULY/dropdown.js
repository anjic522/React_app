import axios from "axios";
import { useEffect, useState } from "react";

import "./navbar.css"
import { useNavigate } from "react-router-dom";




const Findrecipes=()=>{

    const [recipes,setrecipes]=useState([]);
    const [selectedrecipe,setselectedrecipe]=useState({})
    // const navigate=useNavigate()
     useEffect(()=>{
        fetchrecipes();
     },[])



     const fetchrecipes=async()=>{
        const {data}= await axios.get("https://dummyjson.com/recipes")


      const revampdata=data.recipes.map((eachrecipes)=>{
        return{id:eachrecipes.id , name:eachrecipes.name}
      })
      console.log(revampdata)

         setrecipes(revampdata);
        // console.log(data);


        
     }
    //  const handler=(id)=>{
    //     navigate(`/${id}`)
    //  }

     const selecthandler=(event)=>{
        const selectedrecipeid =  event.target.value
        fetcheachrecipe(selectedrecipeid);
   }
     const fetcheachrecipe=async (id)=>{
        const {data}=await axios.get (`https://dummyjson.com/recipes/${id}`);
        setselectedrecipe(data);
        console.log(data)
     }
    return(
        <div>
           <h1>select the recipes</h1>
          {
            recipes.length>0 ?(
            <select onChange={selecthandler}>
              {
                recipes.map((each)=>(
                    
                    <option value={each.id} key={each.id}>{each.name}</option>
    
                ))}
    
              </select>
              ) :(<h1>no recipes found</h1>)
          }
                     
                     
                     {/* first we have to check the object is empty or not  */}
          <div  className="dropdown" >
          {
            Object.keys (selectedrecipe).length>0 &&
            <div >
           <img  src= {selectedrecipe.image} width={540} height={250} />
            <h4 >Name:{selectedrecipe.name}</h4>
            <h4 > Rating:{selectedrecipe.rating}</h4>
            <h4 > Ingredients:{selectedrecipe.ingredients}</h4>
            </div>
          }
          </div>
        </div>
    )
}
export default Findrecipes;