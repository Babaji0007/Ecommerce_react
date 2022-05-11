import { createStore ,combineReducers} from "redux";
// import { calcreducer } from "./Increment/reducer";
import { todoreducer } from "./product/reducer";


const rootReducer=combineReducers({todo:todoreducer})
// export const store=createStore(reducer,{
//     num:0
// })
export const store=createStore(rootReducer,window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_())