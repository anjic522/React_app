

import { Component } from "react";
import "./countapp.css";


class Counter extends Component{

    state={count:0}
    increment(){
        this.setState(
            { count: this.state.count + 1 })
    }
    decrement(){
        // this.setState({count:this.state.count-1})

        this.setState({count:this.state.count ? this.state.count-1:0})
    }
    reset(){
        this.setState({count: 0})
    }

    render(){
        return(
            <div>
            <h1 style={{textAlign:"center"}}>Simple Counter App</h1>
            
            <div className="parent">
                
            <div className="count">
                
                <h1 className="countdisplay">{this.state.count}</h1>
                <button onClick={()=>this.increment()} className="buton" >Increament</button>
                <button onClick={()=>this.decrement()} className="buton">Decreament</button>
                <button onClick={()=>this.reset()} className="buton">Reset</button>
            </div>
            </div>
            </div>
        )
    }
}
export default Counter;

