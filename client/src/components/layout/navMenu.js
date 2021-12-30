import { Link } from 'react-router-dom'

import logoutIcon from './../../assets/logout.svg'
import { useDispatch, useSelector } from 'react-redux'
import { LOGOUT_USER } from './../../redux/action/authAction'
import { CLEAR_STATE_PRODUCT } from './../../redux/action/productAction'
import { useNavigate } from 'react-router-dom'

import store from '../../redux/store'
// import axios from 'axios'

const NavbarMenu = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const abc = useSelector(state => state)
    const logoutEvent = () => {
        localStorage.removeItem('state')
        localStorage.removeItem('e-laptop')
        dispatch(CLEAR_STATE_PRODUCT())
        console.log(abc)
        dispatch(LOGOUT_USER(
        ))
        // const a = store.getState().user
        // console.log(a)
        // useEffect(()=>{
        //     console.log(a)
        // })
        navigate('/login')
    }

    const user = useSelector(state => state.user.phone)
    // console.log(user)


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    {/* <img src={logo} alt='logo' width='32' height='32' /> */}
                    <span className="navbar-brand ml-1">PrevLife</span>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarColor01"
                        aria-controls="navbarColor01"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link to="/dashboard" className="nav-link active" >Dashboard</Link>
                                <span className="visually-hidden">(current)</span>
                            </li>
                            <li className="nav-item">
                                <Link to="/cart" className="nav-link active"  >Cart</Link>
                                <span className="visually-hidden">(current)</span>
                            </li>

                        </ul>
                        <span className="navbar-brand nav-item" disabled>{user ? 'Phone: ' + user : 'anonymus'}</span>
                        <button className="btn btn-secondary my-2 my-sm-0 nav-item" onClick={logoutEvent} >
                            {user ? <img src={logoutIcon} alt="logout" width='24' height='16' /> : 'Đăng nhập'}

                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavbarMenu