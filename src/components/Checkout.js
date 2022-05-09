import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { placeOrder } from '../actions/orderActions'
import Loading from '../components/Loading';
import Error from '../components/Error';
import Success from '../components/Success';

export default function Checkout({ subtotal }) {

    const orderstate = useSelector((state) => state.placeOrderReducer)
    const { loading, error, success } = orderstate
    const dispatch = useDispatch()

    function tokenHandler(token) {
        console.log(token)
        dispatch(placeOrder(token, subtotal))
    }


    return (
        <div>

            {loading && (<Loading />)}
            {error && (<Error error='Something Went Wrong' />)}
            {success && (<Success success='Your Order Placed Succesfully' />)}

            <StripeCheckout
                amount={subtotal * 100}
                shippingAddress
                token={tokenHandler}
                stripeKey='pk_test_51JP8ZDIpJ0ZZAPf9Zhbg28YgrKBlpmoQiTkKnTV25DAViDNRFb2xPNhcg6YG2BCA2FVuKeBRlW2JDhrHfua8zYMu00DxiZObWG'
                currency='ILS'
            >

                <button className='btn'>Checkout</button>


            </StripeCheckout>


        </div >
    )
}
