import {combineReducers} from 'redux';
import { productReducer } from './productReducer';
import { selectproductreducer } from './productReducer';
const reducers=combineReducers({
    allProducts:productReducer,
    product:selectproductreducer
})

export default reducers