import *  as types from './../constants/ActionTypes';

var initialState = "";
var myReducer =(state = initialState, action)=>{
        switch(action.type){
            case types.Search_Product:
                return action.keySearch;
            default: return state;
        }
};
export default myReducer;