
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../actions/userActions';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Success from '../components/Success';

export default function RegisterScreen() {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')
    const registerstate = useSelector(state => state.registerUserReducer)
    const { error, loading, success } = registerstate
    const disptach = useDispatch()

    function register() {

        if (password !== cpassword) {
            alert('Password not match')
        }
        else {
            const user = {
                name,
                email,
                password
            }
            console.log(user);
            disptach(registerUser(user))
        }


    }



    return (
        <div>
            <div className="row justify-content-center mt-5 ">
                <div className="col-md-5 mt-5 shadow-lg p-3 mb-5 bg-body rounded">
                    {error && (<Error error="Email Already Registered" />)}
                    {loading && (<Loading />)}
                    {success && (<Success success="User Registerd Succsesfuly" />)}
                    <h2 className="mb-4">Registration Page</h2>
                    <div>
                        <input type="text" placeholder="name" className="form-control" value={name} onChange={(e) => { setname(e.target.value) }} required />
                        <input type="text" placeholder="email" className="form-control" value={email} onChange={(e) => { setemail(e.target.value) }} required />
                        <input type="text" placeholder="password" className="form-control" value={password} onChange={(e) => { setpassword(e.target.value) }} required />
                        <input type="text" placeholder="confirm password" className="form-control" value={cpassword} onChange={(e) => { setcpassword(e.target.value) }} required />
                        <button onClick={register} className="btn mt-3 mb-4">REGISTER</button>
                        <br />
                        <a style={{ color: 'black' }} href="/login">Click Here To Login!</a>
                    </div>

                </div>
            </div>

        </div>
    )
}
