import React, { useState } from "react"




const Hooktwo  =()=>{
    const [todos,settodos]=useState([
        {
        period:"morning",
        todo:"wakeup at 9pm" 
        },
        {
            period:"afternoon",
            todo:"lunch at 12pm",
        }
    ])
    const todohandler=()=>{
        const newtodo={
            period:"evening",
            todo:"break at 5pm",

        }
        const newtodostate=[...todos,newtodo];
        settodos(newtodostate)
        // console.log(todos)

    }
    const deletehandler=(index)=>{
  const final=todos.filter((each,ind)=> ind!=index);
  settodos(final)
    }
    return(
        <>
        <h1>hello</h1>
        <button onClick={todohandler}>add todos</button>
{
    todos.map((eachtodo,index)=>{
        return(
            <React.Fragment key={index}>
            <h1>current period {eachtodo.period}</h1>
            <h3>current period {eachtodo.todo}</h3>
            <button onClick={()=>deletehandler(index)}>delete</button>
            </React.Fragment>

        )
})
}        </>
    )

}
export default Hooktwo;