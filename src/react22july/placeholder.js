import axios from "axios";
import { Component } from "react";
import "./placeholder.css"
let arr=["https://media.gettyimages.com/id/1400739345/photo/successful-and-modern-young-asian-businesswoman-carrying-smartphone-and-laptop-commuting-to.jpg?s=612x612&w=0&k=20&c=VBy7EqVM1y3WEky_pwIxH11hY1gaEM1p38ltY1DWASc=",
    "https://media.gettyimages.com/id/1125619170/photo/smiling-chinese-man-working-on-laptop-at-home.jpg?s=612x612&w=0&k=20&c=h7xlcT2-XRpAgeVJZeEUMJj6zn7UNIbPbnvLLDupNcU=",
    "https://media.gettyimages.com/id/969442316/photo/young-businesswoman-looking-at-smartphone-while-riding-on-subway.jpg?s=612x612&w=0&k=20&c=n7YXcpq7fYiVzsOpIs81bkipQLyP18vjWG8R8wXha0c=",
    "https://media.gettyimages.com/id/1281438633/photo/portrait-of-cheerful-senior-woman-relaxing-outdoor-standing-on-the-road-in-the-city.jpg?s=612x612&w=0&k=20&c=6p_2e2MYLAbaHNaM4VsiMOlDdSjqa5XzVf12M8lIEH8=",
    "https://media.gettyimages.com/id/1155187914/photo/portrait-of-a-young-asian-female-entrepreneur.jpg?s=612x612&w=0&k=20&c=m-28c9zEh30zwZhgkGk-nBZKyst58_XvUyMqnszFhjw=",
    "https://media.gettyimages.com/id/1149504274/photo/portrait-of-a-taiwanese-man.jpg?s=612x612&w=0&k=20&c=uiQDg8fKN1LCTCU-AxNosEagZAwt7mZdAqRqMLDatyI=",
    "https://media.gettyimages.com/id/1170850337/photo/portrait-of-smiling-mature-chinese-man-in-outdoor-setting.jpg?s=612x612&w=0&k=20&c=VpGaTkYb9TtLaSbaYtD6OkPoV-hGpvnct3CmPOqZ2hE=",
    "https://media.gettyimages.com/id/1143933272/photo/successful-asian-businessman-in-a-modern-coworking-space.jpg?s=612x612&w=0&k=20&c=D-dqSXy0_lKonoo9eYxUzDEkafHrurGvHI6Mef2ssh8=",
    "https://media.gettyimages.com/id/671590124/photo/smiling-chinese-senior-man-chengyang-china-real-people-portrait.jpg?s=612x612&w=0&k=20&c=B0ZoX0ttVTG_OF7kw1TgUa0L191WbcBNfqkHLd6cW8Q=",
    "https://media.gettyimages.com/id/1182415969/photo/portrait-of-confident-asian-businesswoman.jpg?s=612x612&w=0&k=20&c=5UFgN0IEboSUCTCwDZUT6vaHhOWrwgQL4mzR40eOuZE="]
class Placeholder extends Component{
    state={
        products:[],
        error:false
    }
    // fetchData=async()=>{
    //     const response= await fetch("https://fakestoreapi.com/products").then(data=>data.json()).then(data=>this.setState({products:data}))
    //     // console.log(response.data)
        
    // }

    fetchData=async()=>{
        const response= await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(response.data)
        if(response.status===200){
            // for(let i=0;i<response.data.length;i++){
            //     response.data[i]["image"]=arr[i]
            // }
            this.setState({
                products:response.data
            })
            console.log(response.data)
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
                   this.state.products.map((totaldata,index)=>(
                        <div key={totaldata.id} className="child">
                          {/* <img src={totaldata.image} alt={totaldata.name} width={325} height={300}></img> */}
                          <img src={arr[index]} alt={totaldata.name} width={325} height={300}></img>

                           <p className="">{totaldata.name}</p>
                           <p className="">{totaldata.username}</p>

                            </div>  

                    ))
                  
                }
            </div>
        )
    }
}
export default Placeholder;