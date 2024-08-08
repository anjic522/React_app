import { useContext } from "react";
import  Navbar from "./navbar";
import { Recipecontext } from "./navigation";

function FavoriteScreen(){
    const {favouritedish,removefromfavourite}=useContext(Recipecontext)

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
                <img src={each.image} width={330} height={190}/>
                <h4>Ingredients:{each.ingredients}</h4>
                   <h4>Cuisine:{each.cuisine}</h4>
                   <h4>Rating:{each.rating}</h4>
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