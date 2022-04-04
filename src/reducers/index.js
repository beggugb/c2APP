import { combineReducers } from "redux";
import { reducer as toastrReducer } from 'react-redux-toastr';
import { usuarios } from "./usuarios.reducers";
import { monedas } from "./monedas.reducers";
const rootReducer = combineReducers({
    usuarios,
    monedas,    
    toastr: toastrReducer
});

export default rootReducer;