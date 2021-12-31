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
import { LOAD_PRODUCT_IN_CART } from '../../redux/action/cartAction'
import CheckLogged from '../../utils/checkLogged'
import store from '../../redux/store'

const Cart = () => {



    //useReactRouter
    const navigate = useNavigate()
    //dispatch
    const dispatch = useDispatch()
    //totalPrice
    let totalPrice = 0

    //checkLogged
    CheckLogged()
    // let check = store.getState().user.phone
    // let check = store.getState().user.isAuthenticated
    let check = useSelector(state => state.user.isAuthenticated)
    // console.log(check)


    const handleClickLogin = () => {
        navigate('/login')
    }
    const getCart = async () => {
        try {
            const response = await axios.get(`${apiUrl}/cart`)
            // console.log(response.data)
            if (response.data.success) {
                dispatch(LOAD_PRODUCT_IN_CART({
                    productsCart: response.data.cart
                }))
                // return console.log(productsCart.length)
            }
        }
        catch (err) {
            body = (<div>không load được sản phẩm</div>)
        }
    }




    //get productsCart from store of redux
    const productsCart = useSelector(state => state.cart.productsCart)
    useEffect(() => { getCart() }, []);

    // console.log(productsCart)
    // productsCart.map((product, index) =>
    //     console.log(product)
    // )


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
    else if (productsCart.length < 1) {
        body = (<>
            <h2 className="mt-5">You do not have any product in your cart</h2>
            <h2 >{'(>.<)'}</h2>
        </>)
    }
    else {
        body = (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Unit Price</th>
                            <th scope="col"></th>
                            <th scope="col">Total</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {productsCart.map((product, index) => {
                            totalPrice += product.countProductCart * product.productCart.priceProduct
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{product.productCart.nameProduct}</td>
                                    <td>{product.productCart.priceProduct} vnđ</td>
                                    <td>x{product.countProductCart}</td>
                                    <td>{product.countProductCart * product.productCart.priceProduct} vnđ</td>
                                    <td><span className="rm_icon">&times;</span></td>
                                </tr>
                            )
                        }
                        )}
                    </tbody>
                    <tbody className="mt-4">
                        <tr>
                            <td colSpan="6">
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <th scope="col">Total</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col">{totalPrice} vnđ</th>
                            <th scope="col"></th>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }


    return (
        <div>
            <NavbarMenu />
            {body}
        </div>
    )

}

export default Cart