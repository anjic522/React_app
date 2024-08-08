import axios from "axios"
import { useEffect, useState } from "react"







const Products=()=>{
 const [ProductList,setProductList]=useState()
 
 useEffect(()=>{
    fetchingproducts()
 })





const fetchingproducts=async()=>{
     try{
    const{data,status}= await axios.get("https://fakestoreapi.com/products")
    if(status===200){
        setProductList(data)
        console.log(data)
        
    }
    
     }catch(error){}
}
    return(
        <div>
            <h1>api products</h1>
        </div>
    )
}
export default Products;