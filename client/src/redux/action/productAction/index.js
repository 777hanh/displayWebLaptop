export const LOAD_PRODUCT = (data) =>{
    return {
        type: 'product/loadProduct', 
        payload: data
    }
}

export const CLEAR_STATE_PRODUCT = (data) =>{
    return {
        type: 'product/clearState',
        payload: data
    }
}