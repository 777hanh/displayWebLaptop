const initValue = {
    productsCart: []
}

const productsCart = (state = initValue, action) => {
    switch (action.type) {
        case 'cart/loadProductCart':
            return {
                ...state,
                productsCart:
                    action.payload.productsCart
            }
            
        case 'cart/addProductCart':
            return {
                ...state,
                productsCart: [
                    ...state.productsCart,
                    action.payload.product
                ]
            }
            case 'cart/removeProductCart':
                return{
                    ...state,
                    productsCart: [
                        
                    ]

                }

            case 'cart/clearState':
                return{
                    productsCart: []
                }

        default:
            return {
                ...state
            }
    }
}

export default productsCart