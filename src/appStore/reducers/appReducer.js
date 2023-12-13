import { combineReducers } from "redux";
import { getItemReducer } from "./getItemReducer";
import {votingReducer} from "./votingReducer"



export const  appReducer = combineReducers(
    {
        getItemReducer,  
        votingReducer
        
        
    }
)

export default appReducer;