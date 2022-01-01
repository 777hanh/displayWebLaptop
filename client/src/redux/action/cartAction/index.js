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

export const CLEAR_CART = () =>{
    return {
        type: 'cart/clearCart'
    }
}

export const REMOVE_PRODUCT_CART = (data) => {
    return {
        type:'cart/removeProductCart',
        payload: data
    }
}