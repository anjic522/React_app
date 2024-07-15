const First = (prop)=>{
    const {title ="default" } = prop;
    return(
        <h1>{title}</h1>
    )
}
export default First;
 export const Second=()=>{
    return(
        <h2>head2</h2>
    )
};
 export const Third=()=>{
    return(
        <h3>head3</h3>
    )
};
 export const Fourth=()=>{
    return(
        <h4>head4</h4>
    )
};
export const Fifth=()=>{
    return(
        <div>
        <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" width={100} height={150}></img>
        <img src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg" width={150} height={190}>

        </img>
        </div>
    )
}
