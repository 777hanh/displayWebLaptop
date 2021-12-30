import Spinner from "react-bootstrap/Spinner"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import axios from "axios"
import { useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';

import { apiUrl } from '../../constants/apiUrl'
import NavbarMenu from "../../components/layout/navMenu"
import SingleProduct from "../../components/product/singleProduct"
import { LOAD_PRODUCT } from '../../redux/action/productAction'
import {LOGIN_USER}from '../../redux/action/authAction'
import CheckLogged from '../../utils/checkLogged'
import store from '../../redux/store'
import setAuthToken from '../../utils/setAccessToken'

const Cart = () => {



    //useReactRouter
    const navigate = useNavigate()
    //dispatch
    const dispatch = useDispatch()

    //checkLogged
    CheckLogged()
    // let check = store.getState().user.phone
    // let check = store.getState().user.isAuthenticated
    let check = useSelector(state => state.user.isAuthenticated)
    // console.log(check)
    

    const handleClickLogin = () => {
        navigate('/login')
    }

    // if (check) {
    //     if (localStorage['e-laptop']) {
    //         setAuthToken(localStorage['e-laptop'])
    //     }
    // }
    //getProductinCart
    const getCart = async () => {
        try {
            const response = await axios.get(`${apiUrl}/cart`)
            return console.log(response.data)
            if (response.data.success) {
                dispatch(LOAD_PRODUCT({
                    products: response.data.products
                }))
            }
        }
        catch (err) {
            body = (<div>không load được sản phẩm</div>)
        }
    }




    //get product from store of redux
    const products = useSelector(state => state.productList.products)
    useEffect(() => { getCart() }, [products]);


    //check user is logged

    let body = (
        <div className="d-flex justify-content-center mt-4">
            <Spinner animation='border' variant='info' />
        </div>
    )
    // if user is not logged throw message
    if (!check) {
        body = (
            <div className="d-flex justify-content-center mt-5">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-md-auto">
                            <h2>You need Login first to access this page</h2>
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col-md-auto nameWeb" onClick={handleClickLogin}>
                            Login Now
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        body = (<>
            You can see that?
        </>)
    }



    return (
        <div>
            <NavbarMenu />
            {body}
        </div>
    )

}

export default Cart