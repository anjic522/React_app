

export const  Image=(prop)=>{
const {html,css,js,react}=prop
return(
    <img
      class="image"
      src={html}
      alt={css}
      width={css}
      height={react}
    />
);
}

export const Heading = (prop)=>{
    const {title="default"} = prop;

    return(
        <h1>IPL TEAM NAME : {prop.title}</h1>

    );
}

export const Headding2=(prop)=>{
    const{cups="default"}=prop;
    return(
        <h1>cups:{prop.cups}</h1>
    );
}
 export const Headding3=(prop)=>{
    const {players="dafault"}=prop;
    return(
        <h1>players:{prop.players}</h1>
    )
 }

 export const Headding4=(prop)=>{
    const {runners="dafault"}=prop;
    return(
        <h1>runners:{prop.runners}</h1>
    );
 }