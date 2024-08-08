import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Recipecontext } from "./navigation";
import { useNavigate } from "react-router-dom";




    const Searchfunctionality = () => {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    // const {addfavouritedishhaHandler} = useContext(Recipecontext)
    // const navigate = useNavigate();





    const fetching = async (query) => {

        try {
            const { data, status } = await axios.get(`https://dummyjson.com/recipes/search?q=${query}`)


            if (status === 200) {
                const updatedData = data.recipes.map((uni)=>{
                    return {...uni,isFav : false}
                })
                setResults(updatedData)
                
            }
        } catch (error) {
            console.log(error)
        }
    }

    const submitHandler = (e) => {
        const userEntered = e.target.value;
        setSearch(userEntered)
    }


    useEffect(() => {
        fetching(search);
    }, [search]);

     

    return (
        <div>
            <input type="text"
                placeholder="Search"
                value={search}
                onChange={submitHandler}
            />

            {
                results.map((eachsearch) => {
                    return (
                        <div key={eachsearch.id} style={{border:"2px solid black"}}>
                            <h4>{eachsearch.name}</h4>
                            <img src={eachsearch.image} width={330} height={200}></img>
                            <h4>Ingredients:{eachsearch.ingredients}</h4>
                            <h4>Cuisine:{eachsearch.cuisine}</h4>
                            <h4>Rating:{eachsearch.rating}</h4>
                            <button> viewMore</button>

                          
                            
                        </div>
                    )
                }
                )
            }
        </div>
    )

}

export default Searchfunctionality;




