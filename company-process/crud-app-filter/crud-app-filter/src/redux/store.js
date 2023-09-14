
import{ legacy_createStore ,combineReducers, applyMiddleware } from "redux";
import { reducer as AuthReducer } from "./AuthReducer/AuthReducer";
import { reducer as  productReducer } from "./productReducer/productReducer";

import thunk from "redux-thunk";

export  const rootReducer= combineReducers({
      AuthReducer ,  productReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))