import Spinner from "react-bootstrap/Spinner"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import NavbarMenu from "../components/layout/navMenu"
import SingleProduct from "../components/product/singleProduct"

const DashBoard = () => {

    let body = (
        <div className="d-flex justify-content-center mt-2">
            <Spinner animation='border' variant='info' />
        </div>
    )

    if(true) body=(
        <Row className="row-cols-1 row-cols-md-4 g-4 mx-sm-auto mt-2">
        {/* {posts.map(post => (
            <Col key={post._id} className="my-2">
                <SinglePost post={post}></SinglePost>
            </Col>
        ))} */}
            <Col className="my-2">
                <SingleProduct />
            </Col>
            <Col className="my-2">
                <SingleProduct />
            </Col>
            <Col className="my-2">
                <SingleProduct />
            </Col>
            <Col className="my-2">
                <SingleProduct />
            </Col>
            <Col className="my-2">
                <SingleProduct />
            </Col>
            
    </Row>
    )


    return (
        <div>
            <NavbarMenu />
            {body}
        </div>
    )

}

export default DashBoard