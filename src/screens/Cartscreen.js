import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../actions/cartActions'
import { deleteFromCart } from '../actions/cartActions'
import Checkout from '../components/Checkout'
export default function Cartscreen() {

    const cartstate = useSelector(state => state.cartReducer)
    const cartItems = cartstate.cartItems
    var subtotal = cartItems.reduce((x, item) => x + item.price, 0)
    const dispatch = useDispatch()
    return (
        <div>
            <div classname="row justify-content-center">
                <div classname="col-md-6">
                    <h2 style={{ fontsize: '50px' }}>My Cart</h2>
                    {cartItems.map(item => {
                        return <div classname="flex-container">
                            <div className='m-1 w-100'>
                                <img src={item.image} style={{ height: '120px', width: '120px' }}></img>
                            </div>
                            <div className="text-left m-1 w-100">
                                <h1>{item.name} {[item.varient]}</h1>
                                <h1>Price : {item.quantity} * {item.prices[0][item.varient]} = {item.price}</h1>
                                <h1 style={{ display: 'inline' }}>Quantity  </h1>
                                <i className="fas fa-plus" aria-hidden="true" onClick={() => { dispatch(addToCart(item, item.quantity + 1, item.varient)) }}></i>
                                <b> {item.quantity} </b>
                                <i className="fas fa-minus" aria-hidden="true" onClick={() => { dispatch(addToCart(item, item.quantity - 1, item.varient)) }}></i>

                            </div>

                            <div className='m-1 w-100 mt-2'>
                                <i className="fas fa-trash" aria-hidden="true" onClick={() => { dispatch(deleteFromCart(item)) }}></i>

                            </div>
                            <hr />
                        </div>
                    })}

                </div>
                <div classname="col-md-4 text-right">
                    <h3 style={{ fontsize: '40px' }}>Total Price:{subtotal}₪</h3>
                    <Checkout subtotal={subtotal} />
                </div>
            </div>
        </div>
    )


}


