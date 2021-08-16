import {combineReducers} from 'redux';
import {registerReducer} from './authReducer';
import {globalReducer} from './globalReducer';

const reducer = combineReducers({registerReducer, globalReducer});

export default reducer;
