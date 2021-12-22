import {Link} from 'react-router-dom'

const SingleProduct = ({post:{nameProduct, imageProduct, priceProduct}}) => {
    return(
    <div>
        <div className="card" style={{width: 'auto'}}>
            <img src={imageProduct} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{nameProduct}</h5>
                    <p className="card-text"></p>
                    <p className="card-text">{priceProduct}</p>
                    <Link to="/dashboard" className="btn btn-primary" >Buy</Link>
                </div>
        </div>
    </div>
    )
}

export default SingleProduct