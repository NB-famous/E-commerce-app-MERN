// This is an example of a very simple redux store using the redux library

// compose(applyMiddleware(thunk)) to use redux thunk

import {applyMiddleware, createStore, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { cartReducer } from './reducers/cartReducers';
import { productListReducer, productDetailsReducer} from './reducers/productReducers';
import { userSigninReducer } from './reducers/userReducers';

const initialState = {
    userSignin:{
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    },
    cart:{
        cartItems: localStorage.getItem('cartItems') 
        ? JSON.parse(localStorage.getItem('cartItems')) 
        : [],
    },
};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer
    
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // This will allow us to use redux on devtools
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;