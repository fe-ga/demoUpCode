import *  as types from './../constants/ActionTypes';
export const listAll = ()=>{
    return{
        type: types.LIST_ALL
    }
};
export const AddProduct=(Product)=>{
    return{
        type: types.Add_Product,
        Product: Product
    }
};
export const toggleForm=()=>{
    return{
        type: types.Toggle_Form,
        
    }
};
export const openForm=()=>{
    return{
        type: types.Open_Form,
        
    }
};
export const closeForm=()=>{
    return{
        type: types.Close_Form,
        
    }
};
export const deleteProduct=(id)=>{
    return{
        type: types.Delete_Product,
        ID:id
    }
};
export const editProduct=(Product)=>{
    return{
        type: types.Edit_Product,
        Product: Product
    }
};
export const addProduct=(Product)=>{
    return{
        type: types.Add_Product,
        Product: Product
    }
};
export const searchProduct=(keySearch)=>{
    return{
        type: types.Search_Product,
        keySearch : keySearch
    }
};