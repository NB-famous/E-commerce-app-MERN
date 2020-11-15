import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

// Imported Components ///
import ProductScreen from './screens/ProductScreen'
import HomeScreen from './screens/HomeScreen'


function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
      <header className="row">
          <div>
              <a className="brand" href="/">amazona</a>
          </div>
          <div>
              <a href="/cart">Cart</a>
              <a href="/signin">Sign In</a> 
          </div>
      </header>
      <main>
          <Route path="/product/:id" component={ProductScreen} exact></Route>
          <Route path="/" component={HomeScreen} exact></Route>
      </main>
      <footer className="row center">All rights & reserved</footer>
      
      </div>
    </BrowserRouter>
  );
}

export default App;