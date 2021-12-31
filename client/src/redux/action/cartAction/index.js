export const LOAD_PRODUCT_IN_CART = (data) =>{
    return {
        type: 'cart/loadProductCart', 
        payload: data
    }
}

export const CLEAR_STATE_CART = () =>{
    return {
        type: 'cart/clearState'
    }
}