export const LOAD_PRODUCT = (data) =>{
    return {
        type: 'product/loadProduct', 
        payload: data
    }
}

export const LOGIN_USER = (data) =>{
    return {
        type: 'user/loginUser', 
        payload:data
    }
}