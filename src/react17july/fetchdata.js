import axios from "axios";
import { Component } from "react";
import "./fetchdata.css";
import Table from 'react-bootstrap/Table';

class SampleComponentthree extends Component{
    state={
        products:[],
        error:false
    }
    // fetchData=async()=>{
    //     const response= await fetch("https://fakestoreapi.com/products").then(data=>data.json()).then(data=>this.setState({products:data}))
    //     // console.log(response.data)
        
    // }

    fetchData=async()=>{
        const response= await axios.get("https://dummyjson.com/recipes")
        if(response.status===200){
            this.setState({
                products:response.data.recipes
            })
            // console.log(response.data)
        }
        else{
            this.setState({
                error:true
            })
        }
        
        
    }
    componentDidMount(){
        this.fetchData()
    }
   
    render(){
        return(



            <div className="parent">
                {
                    // this.state.error ? <h1>Something went wrong</h1> :console.log(this.state.products)
                   this.state.products.map((totaldata)=>(
                        <div key={totaldata.id} className="child">
                          <img src={totaldata.image} alt={totaldata.name} width={325} height={300}></img>
                           <p className="">{totaldata.name}</p>
                           <p className="">difficulty:{totaldata.difficulty}</p>

                            </div>  

                    ))
                  
                }
            </div>
        )
    }
}
export default SampleComponentthree;