import {createStore, applyMiddleware} from "redux";
import {appReducer} from './reducers/appReducer'
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";


export const appStore = createStore(appReducer, composeWithDevTools(applyMiddleware(thunk)));