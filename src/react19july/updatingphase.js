import { Component } from "react";








export default class Update extends Component{

    constructor(){
        super();
        this.state={
            marks:100
        }
    }

    totalmarks=()=>{
        this.setState({
            marks:this.state.marks+1
        })
    }
    shouldComponentUpdate(){
        return true;
    }
    getSnapshotBeforeUpdate(preprops,prestate){
        console.log(prestate)
    }
    render(){
        return(
            <div>
            <h1>marks{this.state.marks}</h1>
            <button onClick={this.totalmarks}>marks</button>
            </div>
        )
    }
    
}

// import { Component } from "react";





// export default class Update extends Component{
//     constructor(){
//         super();
//         this.state={
//             cakecount:100,
//         }
//     }
// buy=()=>{
// this.setState({
//     cakecount:this.state.cakecount+1
// })
// }
// shouldComponentUpdate(){
//     return true;
// }
// getSnapshotBeforeUpdate(preprops,prestate){
//     console.log(prestate);
//     return null;
// }
//    render(){
//     console.log("render executed")
//     return(
//         <div>
//             <h1>cakes{this.state.cakecount}</h1>
//             <button onClick={this.buy}>buy cake</button>
//         </div>
//     )
//    }

// }




