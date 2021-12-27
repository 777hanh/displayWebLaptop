import React from 'react';
import Form from 'react-bootstrap/Form'
import axios from 'axios';
import { Link, useNavigate, } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { apiUrl } from '../../constants/apiUrl'
import { LOGIN_USER } from '../../redux/action'
import setAuthToken from '../../utils/setAccessToken'
// import AlertMessage from '../Layout/AlertMessage';



const Login = () => {

    let navigate = useNavigate()
    const dispatch = useDispatch()

    //check logged
    useEffect(() => {
        const fetchData = async () => {
            const isLoged = localStorage['e-laptop']
            if (isLoged) {
                setAuthToken(isLoged)
                try {
                    const req = await axios.post(`${apiUrl}/user`)
                    // console.log(req.data)
                    if (req.data.success) {
                        return navigate('/dashboard')
                    }
                    else {
                        return localStorage.removeItem('e-laptop')
                    }
                }
                catch (err) {
                    return localStorage.removeItem('e-laptop')
                }
            }
        }
        fetchData()
    },[])


    const [loginForm, setLoginForm] = useState({
        phone: '',
        password: '',
    })

    const [alert, setAlert] = useState(null)

    const { phone, password } = loginForm
    const onChangeLoginForm = event => setLoginForm({
        ...loginForm,
        [event.target.name]: event.target.value
    })

    // //login
    const loginEvent = async (e) => {
        e.preventDefault()
        try {
            // console.log(loginForm)   
            const response = await axios.post(`${apiUrl}/user/login`, loginForm)
            // return console.log(response.data)
            if (response.data.success) {
                localStorage.setItem('e-laptop', response.data.accessToken)
                setAuthToken(localStorage['e-laptop'])
                try {
                    const req = await axios.post(`${apiUrl}/user`)
                    dispatch(LOGIN_USER({
                        phone: req.data.user.phone
                    }))
                    // console.log(req.data)
                    navigate(-1)
                } catch (error) {
                    console.log('Loi token')
                }
                // navigate('/dashboard')
            }
            else {
                setAlert({ type: 'danger', message: response.data.message })
                // console.log(response.data.message)
            }
        }
        catch (err) {
            console.log(err)
        }
        //     try {
        //         const loginData = await loginUser(loginForm)
        //         if (loginData.success) {
        //             navigate('/dashboard')
        //         }
        //         else{
        //             setAlert({type:'danger', message: loginData.message})
        //         }
        //     }
        //     catch (err) {
        //         console.log(err)
        //     }
    }


    let body = (
        <>
            <Form className="mt-4" onSubmit={loginEvent}>

                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="Enter Phone Number"
                        name="phone"
                        value={phone}
                        onChange={onChangeLoginForm}
                    />
                </div>
                <div className="form-group mt-4">
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={onChangeLoginForm}
                    />
                </div>
                {/* <AlertMessage info={alert}/> */}
                <button type="submit" className="btn btn-primary mt-4">Login</button>
            </Form>
            <p className="mt-4">You don't have Account?
                <Link to="/register" className="link-form-landing"> Register </Link>
                now
            </p>
        </>
    )
    return (
        <React.Fragment>

            <div className="landing">
                <div className="dark-overlay">
                    <div className="landing-inner">
                        <h1>E-Laptop</h1>
                        {body}
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Login