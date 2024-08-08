import { Component } from "react";




class Rough extends Component{
    constructor(){
        super();
        this.state={
            color:"pink",
        }
    }

    render(){
        console.log("render is executed")
        return(
            <div>
                <h1>render example</h1>
                <h1 style={{color:this.state.color}}> text color{this.state.color}</h1>
            </div>
        )
    }
}
export default Rough;