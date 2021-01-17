// This is an example of a very simple redux store using the redux library

// compose(applyMiddleware(thunk)) to use redux thunk

import {applyMiddleware, createStore, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { cartReducer } from './reducers/cartReducers';
import { orderCreateReducer, orderDeleteReducer, orderDeliverReducer, orderDetailsReducer, orderListReducer, orderMineListReducer, orderPayReducer } from './reducers/orderReducers';
import { productListReducer, productDetailsReducer, productCreateReducer, productUpdateReducer, productDeleteReducer} from './reducers/productReducers';
import { userDeleteReducer, userListReducer, userRegisterReducer, usersDetailsReducer, userSigninReducer, userUpdateProfileReducer, userUpdateReducer } from './reducers/userReducers';

const initialState = {
    userSignin:{
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    },
    cart:{
        cartItems: localStorage.getItem('cartItems') 
        ? JSON.parse(localStorage.getItem('cartItems')) 
        : [],
        shippingAddress: localStorage.getItem('shippingAddress')
        ? JSON.parse(localStorage.getItem('shippingAddress')) 
        : {},
        paymentMethod: 'PayPal'
    },
};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderMineList: orderMineListReducer,
    userDetails: usersDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userUpdate: userUpdateReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productDelete: productDeleteReducer,
    orderList: orderListReducer,
    orderDelete: orderDeleteReducer,
    orderDeliver: orderDeliverReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,

})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // This will allow us to use redux on devtools
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;