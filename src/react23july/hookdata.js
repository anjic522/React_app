import axios from "axios";
import "./hook.css";
import Table from 'react-bootstrap/Table';
import { Component } from "react";

class Hook extends Component{
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
            console.log(response.data.recipes,"recipes")
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


<div>
<Table striped bordered hover>
      <thead>
        
          <th style={{border:"2px solid black" }}>id</th>
          <th style={{border:"2px solid black" }}>Image</th>
          <th style={{border:"2px solid black" }}>ingredients</th>
          <th style={{border:"2px solid black" }}>cuisine</th>
          <th style={{border:"2px solid black" }}>rating</th>

        
      </thead>
      {
      this.state.products.map((totaldata)=>( <tbody><tr style={{border:"2px solid black" }}>
         <td style={{border:"2px solid black" }}><p>{totaldata.id}</p></td>
          <td style={{border:"2px solid black" }}><img src={totaldata.image} alt={totaldata.name} width={325} height={300}></img></td>
          <td style={{border:"2px solid black" }}><p className="title">{totaldata.ingredients}</p></td>
          <td style={{border:"2px solid black" }}><p className="price">{totaldata.cuisine}</p></td>
          <td style={{border:"2px solid black" }}><p className="categry">{totaldata.rating}</p></td>

          
        </tr>
        </tbody>
    
        ))
    }
     
    </Table>
</div>
            // <div className="parent">
            //     {
            //         // this.state.error ? <h1>Something went wrong</h1> :console.log(this.state.products)
            //        this.state.products.map((totaldata)=>(
            //             <div key={totaldata.name} className="child">
            //               <img src={totaldata.image} alt={totaldata.name} width={325} height={300}></img>
            //                <p className="">Tittle:{totaldata.title}</p>
            //                <p className="">price:{totaldata.price}</p>

            //                 </div>  

            //         ))
                  
            //     }
            // </div>
        )
    }
}
export default Hook;