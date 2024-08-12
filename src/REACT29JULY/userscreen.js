
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./navbar";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./navbar.css";
import { Recipecontext } from "./navigation";


const Recipescreen = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState({});
    const {  addfavouritedishhaHandler } = useContext(Recipecontext);
    const navigate = useNavigate();


    useEffect(() => {
        fetcheachproduct(id);
    }, [id])

    const fetcheachproduct = async (recipesid) => {
        try {
            const { data,status } = await axios.get(`https://dummyjson.com/recipes/${recipesid}`)

            if(status === 200)
            {
                const updata={...data,isexists:false}
                setRecipe(updata)
                console.log(data,"data")
                console.log(updata,"updata")

            }
        }
        catch (e) {
            console.log(e)
        }

    }



const addfoodhandler = (eachfood) => {
    addfavouritedishhaHandler(eachfood);
    setRecipe({...recipe,isexists:true})
}
const gotofavouritehandler = () => {
    navigate("/favourite");
};
    return (
        <>
            <Navbar />
            {
                Object.keys(recipe).length > 0 ? (
                    <div className="single-card">
                        <img src={recipe.image} width={300} height={200} lassName="image-style"/>
                        <h5>Name:{recipe.name}</h5>
                        <p>Rating:{recipe.rating}</p>
                        <p>Cuisine:{recipe.cuisine}</p>
                        <p>Ingridients:{recipe.ingredients}</p>
                        <p>Instructions:{recipe.instructions}</p>
                        <p>prepTimeMinutes:{recipe.prepTimeMinutes}</p>
                        {recipe.isexists ? (
                            <button onClick={() => gotofavouritehandler()} className="buttonthree">Go to Favourite</button>
                        ) : (
                            <button onClick={() => addfoodhandler(recipe)} className="buttonthree">Add Food</button>
                        )}
                        </div>
                        
                    ): (
                    <>
                        <h1>please wait data loading</h1>
                    </>
                )
            }
        </>
    )
}
export default Recipescreen;

