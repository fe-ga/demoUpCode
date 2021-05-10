import *  as types from './../constants/ActionTypes';

var initialState = { ID: null, Price: 0, Name: '', Brand: '' };
var myReducer =(state = initialState, action)=>{
        switch(action.type){
            case types.Edit_Product:
                return action.Product;
            default: return { ID: null, Price: 0, Name: ' ', Brand: ' ' };
        }
        
};
export default myReducer;