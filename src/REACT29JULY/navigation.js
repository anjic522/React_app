import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homescreen from "./homescreen";
import Aboutcreen from "./aboutscreen";
import Settingscreen from "./settingscreen";
import Blogscreen from "./blogscreen";
import Inavalid from "./invalid";
import Nested, { Newdoctors, Olddoctors } from "./nested doctor";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react"
import Newhomescreen from "./home-twocreen";
import FavoriteScreen from "./favorite-screen";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchfunctionality from "./searchfunction";
import Recipescreen from "./userscreen";





export const Recipecontext = createContext();
const Navigationstack = () => {

    // third to collect staate
    const [recipelisttwo, setrecipelist] = useState([])
    const [favouritedish, setfavouritedish] = useState([])
    // second
    useEffect(() => {
        recipesproduct();

    }, [])

    // first to call api
    const recipesproduct = async () => {
        try {
            const { status, data } = await axios.get("https://dummyjson.com/recipes")


            const newdata = data.recipes.map((eachdata) => {
                return { ...eachdata, isexists: false }
            })
            if (status === 200) {
                console.log(data)
                setrecipelist(newdata);

            }
        } catch (err) { }
    }





    const addfavouritedishhaHandler = (newdish) => {

        const recipeexist = favouritedish.find((eachfood) => eachfood.id === newdish.id);

        // const newrecipelist = recipelisttwo.map((eachrecipes) => {
        //     if (eachrecipes.id === newdish.id) {
        //         return { ...eachrecipes, isexists: true }
        //     }
        //     else {
        //         return eachrecipes
        //     }
        // })
        // setrecipelist(newrecipelist)


        if (recipeexist) {
            toast.error("already existed !", {
                position: "top-left"
            });
        }
        else {
            setfavouritedish([...favouritedish, newdish])
            toast.success("added food successfully !", {
                position: "top-right"
            });

        }
    }

    const removefromfavourite = (id) => {
        const newfavouritelist = favouritedish.filter(eachdish => eachdish.id !== id);
        setfavouritedish(newfavouritelist);
    }





    return (
        <Recipecontext.Provider value={{
            recipelisttwo: recipelisttwo,
            favouritedish: favouritedish,
            addfavouritedishhaHandler: addfavouritedishhaHandler,
            removefromfavourite: removefromfavourite

        }}>
            {
                console.log(favouritedish)
            }
            <BrowserRouter>
                <Routes>
                    {/* static routes */}
                    {/* <Route path="/" element={<Homescreen />} /> */}
                    <Route path="/new" element={<Newhomescreen />} />

                    {/* <Route path="/about" element={<Aboutcreen />} /> */}
                    {/* <Route path="/setting" element={<Settingscreen />} /> */}
                    {/* <Route path="/blog" element={<Blogscreen />} /> */}
                    <Route path="/*" element={<Inavalid />}></Route>
                    

                    {/* <Route path="/recipes" element={<Userscreen/>}></Route> */}

                    <Route path="/recipe" element={<Recipescreen />}></Route>

                    <Route path="/recipe/:id" element={<Recipescreen />}></Route>



                    <Route path="/favourite" element={<FavoriteScreen />}></Route>


                    {/* 
            <Route path="doctors" element={<Nested/>}>
            <Route path="New" element={<Newdoctors/>}></Route>
            <Route path="Old" element={<Olddoctors/>}></Route>

            </Route> */}





                    {/* dynamicroutes */}


                    {/* <Route path="/recipes/:cuisine/:recipesid" element={<Userscreen />}></Route> */}

                </Routes>

            </BrowserRouter>
            {/* <Searchfunctionality/> */}
            <ToastContainer />
        </Recipecontext.Provider>
    )
}
export default Navigationstack;