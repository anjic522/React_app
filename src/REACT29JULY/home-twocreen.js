import { useContext, useEffect, useState } from "react";
import Navbar from "./navbar";
import { Recipecontext } from "./navigation";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Newhomescreen = () => {
    const {  addfavouritedishhaHandler } = useContext(Recipecontext);
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);

    const fetching = async (query) => {
        try {
            const { data, status } = await axios.get(`https://dummyjson.com/recipes/search?q=${query}`);
            if (status === 200) {
                const updatedData = data.recipes.map((uni) => ({
                    ...uni,
                    existinfavourite: false
                }));
                setResults(updatedData);
            }
        } catch (error) {
            setError("Failed to fetch recipes.");
            console.error(error);
        }
    }

    const submitHandler = (e) => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        fetching(search);
    }, [search]);



    const addfoodhandler = (eachfood) => {
        addfavouritedishhaHandler(eachfood);
        setResults(results.map(recipe =>
            recipe.id === eachfood.id ? { ...recipe, existinfavourite: true } : recipe
        ));
    }

    const gotofavouritehandler = () => {
        navigate("/favourite");
    };

    const goToViewMore = (id) => {
        navigate(`/recipe/${id}`);
    }

    return (
        <>
            <Navbar />
            <center>
                <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={submitHandler}
                    style={{ width: 400, height: 50, margin: 20 }}
                />
            </center>

            {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

            <div className="parent">
                {results.map((each) => (
                    <div className="child" key={each.id}>
                        <h4>{each.name}</h4>
                        <img src={each.image} width={330} height={200} alt={each.name} />


                        <button className="buttontwo" onClick={() => goToViewMore(each.id)}>View More</button>

                        {each.existinfavourite ? (
                            <button onClick={() => gotofavouritehandler(each)} className="buttonthree">Go to Favourite</button>
                        ) : (
                            <button onClick={() => addfoodhandler(each)} className="buttonthree">Add Food</button>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Newhomescreen;
