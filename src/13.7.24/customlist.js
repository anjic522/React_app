
const Custom=({list})=>{
    return (
    
    <ol>
        {list.map((eachitem)=>(
            <li>{eachitem}</li>
        ))}
    </ol>
    
   
    )
};
export default Custom;







