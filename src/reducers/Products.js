import *  as types from './../constants/ActionTypes';
// var data= JSON.parse(localStorage.getItem("Products"));
// var initialState =data ?  data : [];
var initialState = [
        { ID: 11100, Price: 1000, Name: 'Mi 4x', Brand: 'Xiaomi' },
        { ID: 1, Price: 10200, Name: 'samsung s2', Brand: 'SamSung' },
        { ID: 2, Price: 10300, Name: 'Iphone Tàu', Brand: 'Iphone' },
        { ID: 3, Price: 10040, Name: 's4', Brand: 'LG' }
];
var findIndex = (Products, id) => {
        var result = -1;
        Products.forEach((value, index) => {
                if (value.ID == id)
                        result = index;
        });
        
        return result;
}
var randomID = function () {
        // Math.random should be unique because of its seeding algorithm.
        // Convert it to base 36 (numbers + letters), and grab the first 9 characters
        // after the decimal.
        return '_' + Math.random().toString(36).substr(2, 9);
};
var myReducer = (state = initialState, action) => {


        switch (action.type) {
                case types.LIST_ALL:
                        return state;
                case types.Add_Product:
                        var id = action.ID;
                        var index = findIndex(state, id);
                        var newProduct = {
                                ID: randomID(),
                                Price: action.Product.Price,
                                Name: action.Product.Name,
                                Brand: action.Product.Brand
                        }
                        state.push(newProduct);
                        // localStorage.setItem('Products', JSON.stringify(state))
                        return [...state];
                case types.Delete_Product:
                        if (index !== -1) {
                                state.splice(index, 1)
                        }
                        return [...state];
                case types.Edit_Product:
                        var ID = action.Product.ID;
                        var Index = findIndex([...state], ID);
                        if (Index !== -1) {
                                state[Index] = action.Product;
                        }
                        return [...state];
                default: return state;

        }
};
export default myReducer;