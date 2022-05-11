const initialState={
  
    todo:[]
}
export const todoreducer=(store=initialState,{type,payload})=>{
   switch(type){
           case "ADD_TODO":
           return{...store,todo:[...payload]} 
           case "DEL_TODO":
           return{...store,payload} 
           default:
               return store
   }
}