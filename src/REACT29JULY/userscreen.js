
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
                const updatedData = data.recipes.map((uni) => ({
                    ...uni,
                    existinfavourite: !false
                }));
                setRecipe(updatedData);
            }
        }
        catch (e) {
            console.log(e)

        }

    }

console.log(recipe)

const addfoodhandler = (eachfood) => {
    addfavouritedishhaHandler(eachfood);
    setRecipe(recipe.map(recipe =>
        ({ ...recipe, existinfavourite: true } )
    ));
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
                        <img src={recipe.image} width={300} height={200} />
                        <h5>Name:{recipe.name}</h5>
                        <h5>Rating:{recipe.rating}</h5>
                        <h5>Cuisine:{recipe.cuisine}</h5>
                        <h5>Ingridients:{recipe.ingredients}</h5>
                        {recipe.existinfavourite ? (
                            <button onClick={() => gotofavouritehandler} className="buttonthree">Go to Favourite</button>
                        ) : (
                            <button onClick={() => addfoodhandler(recipe.id)} className="buttonthree">Add Food</button>
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

