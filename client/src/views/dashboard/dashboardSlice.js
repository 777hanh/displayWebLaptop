const initValue = {
    products: []
}

const productReducer = (state = initValue, action) => {
    switch (action.type) {
        case 'product/loadProduct':
            return {
                ...state,
                products:
                    action.payload.products
            }
            
        case 'product/addProduct':
            return {
                ...state,
                products: [
                    ...state.products,
                    action.payload.products
                ]
            }

        default:
            return {
                ...state
            }
    }
}

export default productReducer