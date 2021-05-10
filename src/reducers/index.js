import {combineReducers} from 'redux';
import Products from './Products'
import isDisplay from './isDisplay'
import editItem from './itemEdit'
import searchProduct from './searchProduct'
const myReducer = combineReducers ({
    Products: Products,
    isDisplay: isDisplay,
    editItem : editItem,
    searchProduct : searchProduct
});
export default myReducer;