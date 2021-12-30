import Spinner from "react-bootstrap/Spinner"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import axios from "axios"
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom';

import { apiUrl } from '../../constants/apiUrl'
import NavbarMenu from "../../components/layout/navMenu"
import SingleProduct from "../../components/product/singleProduct"
import { LOAD_PRODUCT } from './../../redux/action/productAction'
// import CheckLogged from './../../utils/checkLogged'
import store from './../../redux/store' 

const DashBoard = () => {



    //useReactRouter
    // const navigate = useNavigate()
    //dispatch
    const dispatch = useDispatch()

    //checkLogged
    // CheckLogged()
    let check = store.getState().user.phone
    // let check = useSelector(state => state.user.phone)
    // useEffect(() => {
    //     console.log(check)
    // }, [check]);

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
    // const products = []
    // console.log(products)


    //check user is logged

    let body = (
        <div className="d-flex justify-content-center mt-4">
            <Spinner animation='border' variant='info' />
        </div>
    )

    if (products.length > 0) body = (
        <div>
            <Row className="row-cols-1 row-cols-md-5 row-cols-sm-2 g-5 mx-sm-1 mx-md-1 mt-2 ">
                {products.map((product, index) =>
                    <Col key={index} className="my-2 mx-2" style={{ width: 230, height: 'auto' }}>
                        <SingleProduct post={product} />
                    </Col>
                )}

                <Col className="my-2 mx-2" style={{ width: 230, height: 'auto' }}>
                    <SingleProduct post />
                </Col>
                <Col className="my-2 mx-2" style={{ width: 230, height: 'auto' }}>
                    <SingleProduct post />
                </Col>
                <Col className="my-2 mx-2" style={{ width: 230, height: 'auto' }}>
                    <SingleProduct post />
                </Col>
                <Col className="my-2 mx-2" style={{ width: 230, height: 'auto' }}>
                    <SingleProduct post />
                </Col>
                <Col className="my-2 mx-2" style={{ width: 230, height: 'auto' }}>
                    <SingleProduct post />
                </Col>
                <Col className="my-2 mx-2" style={{ width: 230, height: 'auto' }}>
                    <SingleProduct post />
                </Col>
            </Row>
        </div>
    )


    return (
        <div>
            <NavbarMenu />
            {body}
        </div>
    )

}

export default DashBoard