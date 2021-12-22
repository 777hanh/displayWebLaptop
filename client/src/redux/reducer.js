import productReducer from '../views/dashboard/dashboardSlice'

const initState = {}

const rootReducer = (state = initState, action) => {
    return {
        productList: productReducer(state.productList, action)
    }
}
export default rootReducer