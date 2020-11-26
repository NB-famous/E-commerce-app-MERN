import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

// Imported Components ///
import ProductScreen from './screens/ProductScreen'
import HomeScreen from './screens/HomeScreen'
import CartScreen from './screens/CartScreen';
import { useSelector } from 'react-redux';
import SigninScreen from './screens/SigninScreen';


function App() {

  ///// using reduxx
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  //////////

  return (
    <BrowserRouter>
      <div className="grid-container">
      <header className="row">
          <div>
              <Link className="brand" to="/">amazona</Link>
          </div>
          <div>
              <Link to="/cart">Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
              </Link>
              <Link to="/signin">Sign In</Link> 
          </div>
      </header>
      <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen} exact></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
      </main>
      <footer className="row center">All rights & reserved</footer>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
