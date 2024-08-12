import { useContext } from "react";
import  Navbar from "./navbar";
import { Recipecontext } from "./navigation";

function FavoriteScreen(){
    const {favouritedish,removefromfavourite}=useContext(Recipecontext)
    console.log(favouritedish,"favorites")
    const removehandler=(eachfood)=>{
        removefromfavourite(eachfood.id)
         
    }
    return(
        <div>
            <Navbar/>
            <div className="parent">

            {
                favouritedish.length>0 ?
                <>
{
    favouritedish.map(each=>{
        return(
            <div className="child">
                <h4>{each.name}</h4>
                <img src={each.image} width={330} height={190}  className="image-style"/>
                <p>Ingredients:{each.ingredients}</p>
                   <p>Cuisine:{each.cuisine}</p>
                   <p>Rating:{each.rating}</p>
                   <p>Instructions:{each.instructions}</p>
                   <p>prepTimeMinutes:{each.prepTimeMinutes}</p>
                <button onClick={()=>removehandler(each)} className="buttontwo">Remove</button>
            </div>
        )
    })
}                
                </>
                :
                <h1>no dish found</h1>            
            }
            </div>
        </div>
    )
}
export default FavoriteScreen;