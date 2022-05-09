import React from 'react'
import 'react-popper'
import { useSelector, useDispatch } from 'react-redux';
import { usePopper } from 'react-popper';
import { logoutUser } from '../actions/userActions';
export default function Navbar() {
    const cartstate = useSelector(state => state.cartReducer)
    const userstate = useSelector(state => state.loginUserReducer)
    const { currentUser } = userstate
    const dispatch = useDispatch()
    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
                <a className="navbar-brand" href="/">CheezyPizza</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">

                        {currentUser ? (<div className="dropdown">
                            <a className="dropdown-toggle nav-link" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                {currentUser.name}
                            </a>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <a className="dropdown-item" href="/orders">Orders</a>
                                <a className="dropdown-item" href="#" onClick={() => { dispatch(logoutUser()) }}><li>Log Out</li></a>
                            </div>
                        </div>) : (<li className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                        </li>)}

                        <li className="nav-item">
                            <a className="nav-link" href="/cart">Cart {cartstate.cartItems.length} Items</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}