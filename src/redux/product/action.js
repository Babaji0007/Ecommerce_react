export const ADD_TODO="ADD_TODO"
export const DEL_TODO="DEL_TODO"

// we are dispatching action here
export const addTodo=(payload)=>({type:ADD_TODO,payload})
export const delTodo=(payload)=>({type:DEL_TODO,payload})