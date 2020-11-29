import React, { useState } from "react"
import CheckoutSteps from '../components/CheckoutSteps'
import {useDispatch, useSelector} from 'react-redux'
import { savePaymentMethod } from "../actions/cartActions";

const PaymentMethodScreen = (props) => {
    const cart = useSelector(state => state.cart);
    const { shippingAddress } = cart;
    if(!shippingAddress.address){
        props.history.push('/shipping')
    }
    const [paymentMethod, setPaymentMethod] = useState("PayPal");

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod))
        props.history.push('/placeorder')
    } 

  return (
    <div>
        <CheckoutSteps step1 step2 step3> </CheckoutSteps>
        <form className="form" onSubmit={submitHandler}>
            <div>
                <h1>Payment Method</h1>
            </div>
            <div>
                <div>
                    <input 
                        type="radio" 
                        id="PayPal"
                        value="PayPal" 
                        name="paymentMethod" 
                        required 
                        checked
                        OnChange={(e) => setPaymentMethod(e.taget.value)}>
                    </input>
                    <label htmlFor="paypal" > Paypal </label>
                </div>
            </div>

            <div>
                <div>
                    <input 
                        type="radio" 
                        id="stripe"
                        value="Stripe" 
                        name="paymentMethod" 
                        required 
                        OnChange={(e) => setPaymentMethod(e.taget.value)}>
                    </input>
                    <label htmlFor="stripe" > Stripe </label>
                </div>
            </div>

            <div>
                <button className="primary" type="submit"> Continue </button>

            </div>
        </form>
      
    </div>
  )
}

export default PaymentMethodScreen