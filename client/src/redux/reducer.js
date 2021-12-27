import {combineReducers} from 'redux'

import productReducer from '../views/dashboard/dashboardSlice'
import userReducer from './reducer/auth'


////===========basic type===========
// const initState = {}

// const rootReducer = (state = initState, action) => {
//     return {
//         productList: productReducer(state.productList, action),
//         user: userReducer(state.user, action)
//     }
// }


////===========use combineReducer===========
const rootReducer = combineReducers({
    productList: productReducer, 
    user: userReducer
})
export default rootReducer