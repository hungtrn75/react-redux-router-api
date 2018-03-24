import * as Types from './../constants/ActionTypes';

let initialState = [];

let findIndex = (products, id) => {
    let result = -1;
    products.forEach((product, index) => {
        if (product.id === id) {
            result = index;
        }
    })
    return result;
}
const products = (state = initialState, action) => {
    let index = -1;
    switch (action.type) {
        case Types.FETCH_ALL_PRODUCTS:
            state = action.products;
            return [...state];
        case Types.DELETE_PRODUCT:
            let { id } = action;
            index = findIndex(state, id);
            if (index !== -1) {
                state.splice(index, 1);
            }
            return [...state];
        case Types.ADD_PRODUCT:
            state.push(action.product);
            return [...state];
        case Types.UPDATE_PRODUCT:
            index = findIndex(state, action.product.id);
            state[index] = action.product;
            return [...state];
        default: return state;
    }
}

export default products;