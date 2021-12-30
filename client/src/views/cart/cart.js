import Spinner from "react-bootstrap/Spinner"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import axios from "axios"
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';

import { apiUrl } from '../../constants/apiUrl'
import NavbarMenu from "../../components/layout/navMenu"
import SingleProduct from "../../components/product/singleProduct"
import { LOAD_PRODUCT } from '../../redux/action'
import CheckLogged from '../../utils/checkLogged'
import store from '../../redux/store'

const Cart = () => {



    //useReactRouter
    const navigate = useNavigate()
    //dispatch
    const dispatch = useDispatch()

    //checkLogged
    CheckLogged()
    let check = store.getState().user.phone
    useEffect(() => {
        if (!check)
            navigate('/login')
    })

    //getProduct
    const getProducts = async () => {
        try {
            const response = await axios.get(`${apiUrl}/product/getproducts`)
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
    useEffect(() => { getProducts() }, [products]);


    //check user is logged

    let body = (
        <div className="d-flex justify-content-center mt-4">
            <Spinner animation='border' variant='info' />
        </div>
    )




    return (
        <div>
            <NavbarMenu />
            {body}
        </div>
    )

}

export default Cart