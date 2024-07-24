import axios from "axios";
import { Component } from "react";
import "./sample.css";
import Table from 'react-bootstrap/Table';

class SampleComponent extends Component{
    state={
        products:[],
        error:false
    }
    // fetchData=async()=>{
    //     const response= await fetch("https://fakestoreapi.com/products").then(data=>data.json()).then(data=>this.setState({products:data}))
    //     // console.log(response.data)
        
    // }

    fetchData=async()=>{
        const response= await axios.get("https://fakestoreapi.com/products")
        if(response.status===200){
            this.setState({
                products:response.data
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
                        <div key={totaldata.name} className="child">
                          <img src={totaldata.image} alt={totaldata.name} width={325} height={300}></img>
                           <p className="">Tittle:{totaldata.title}</p>
                           <p className="">price:{totaldata.price}</p>

                            </div>  

                    ))
                  
                }
            </div>
        )
    }
}
export default SampleComponent;