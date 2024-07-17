import logo from './logo.svg';
import './App.css';

import { Compo } from './12.7.24/card';
// import "./card.css"
import BasicExample from './12.7.24/boot';
import Customprogresbar from './12.7.24/progbar';

import Custom from './13.7.24/customlist';
import First from './components/headding/head';
import { Food } from './13.7.24/list';
import "./date13.7.css";
import Counter from './react160724/counter.js';








const students=["anji","gonachakrala","narendra","chalapathi","kiran","pavan"];

const veg=["brinjal","tomato","onion","potato","ladysfinger","cauliflower"];
const scientist=["kalam","einsteen","thomas","ramanjan"];



const Item="biryani";
const Ingredients=["water","rice","oil","vegetables","dryfruits"]
const Instructions=["first go to kitchen","on the stove","lid a stove","place a pan ","make biryani","eat well","keep smile","have a good day"]


function App() {


return(
 

  <div>
    <First title={"fruits"}></First>
    <Custom list={["apple","banana","guva","grapes","apple","banana","guva","grapes"]}></Custom>
    <First title={"students"}></First>
    <Custom list={students}></Custom>
    <First title={'veg'}></First>
    <Custom list={veg}></Custom>
    <First title={'scientist'}></First>
    <Custom list={scientist}></Custom>
    <First title={Item}></First>
    <First title={"ingredients to make a "+Item}></First>
<Custom list={Ingredients}></Custom>
    <First title={"instructions to prepare a "+Item}></First>
    <Custom list={Instructions}></Custom>
    

<Food></Food>

    <Counter></Counter>

  </div>

) 



}

export default App;
