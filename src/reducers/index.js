import { combineReducers } from 'redux';
import products from './products';
import itemEditting from './itemEditting';

const appReducer = combineReducers({
    products,
    itemEditting
});

export default appReducer;