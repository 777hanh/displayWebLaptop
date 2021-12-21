const initState={}

const rootReducer = (state =initState, action) =>{
    return{ 
        productList: productReducer(state.productReducer, action)
    }
}
export default rootReducer