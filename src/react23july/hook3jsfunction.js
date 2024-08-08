

export function greetingfun(){
    let date=new Date();
    let hours=date.getHours();
     let greeting="";
     if(hours >=0 && hours <6){
        greeting="early morning";
     }
     else if(hours >=6 && hours <11){
        greeting ="morning";
     }
     else if(hours >=11 && hours <16){
        greeting="afternoon";
     }
     else if(hours >=16 && hours <20){
        greeting="evening";
     }
     else {
        greeting="night";
     }
     return `good ${greeting}`
}
greetingfun();