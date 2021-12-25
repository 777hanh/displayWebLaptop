import productReducer from '../views/dashboard/dashboardSlice'
import userReducer from './reducer/auth'

const initState = {}

const rootReducer = (state = initState, action) => {
    return {
        productList: productReducer(state.productList, action),
        user: userReducer(state.user, action)
    }
}
export default rootReducer