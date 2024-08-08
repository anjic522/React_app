import axios from "axios";
import { Component } from "react";



class Mounting extends Component{
    constructor (){
        console.log("constructor")
        super();
        this.state={
            color:"red",
            products:[],
            error:false,
        }
    }
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps",props,state)
        return {color:props.tocolor}
    }
    componentDidMount(){
        console.log("componentDidmount")
        this.fetchData();
    }
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
    render(){
        console.log("render example")
        return(
            <>
            <h1>render example</h1>
            <h1 style={{color:this.state.color}}>fav color {this.state.color}</h1>
            </>
        )
    }
}
export default Mounting;