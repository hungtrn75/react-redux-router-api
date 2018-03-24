import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

export const actFetchProductsReq=()=>{
    return (dispatch)=>{
        return callApi('products', 'GET', null).then(res => {
            if (res.status !== 404) {
                dispatch(actFetchProducts(res.data));
            }    
        }).catch(e => {
            console.log(e);
          })
    }
}

export const actDeleteProductReq = id => {
    return dispatch => {
        return callApi(`products/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteProduct(id));
        })
    }
}

export const actFetchProducts = products => {
    return {
        type: Types.FETCH_ALL_PRODUCTS,
        products
    }
}

export const actDeleteProduct = id => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}

export const actAddProductReq = product => {
    return dispatch => {
        return callApi('products', 'POST', product).then(res => {
            dispatch(actAddProduct(res.data));
        })
    }
}

export const actAddProduct = product => {
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}

export const actGetProductReq = id => {
    return dispatch => {
        callApi(`products/${id}`, 'GET', null).then(res => {
            dispatch(actGetProduct(res.data));
        })
    }
}

export const actGetProduct = product => {
    return {
        type: Types.GET_PRODUCT,
        product
    }
}

export const actUpdateProductReq = product => {
    return dispatch => {
        return callApi(`products/${product.id}`, 'PUT', product).then(res => {
            dispatch(actUpdateProduct(res.data));
        })
    }
}

export const actUpdateProduct = product => {
    return {
        type: Types.UPDATE_PRODUCT,
        product
    }
}