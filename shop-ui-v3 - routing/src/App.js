import React, { useState } from 'react';
import './App.css';
import Item from './components/Item';
import Navabar from './components/Navabar';
import CartView from './components/CartView';
import Home from './components/Home';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ItemList from './components/ItemList';

function App() {


  const [cart, setCart] = useState([]);


  const addToCart = e => {
    let { item } = e;
    setCart([...cart, item])
  }

  const renderCart = () => {
    return <CartView value={cart} />
  }


  return (
    <div className="container">
      <Navabar title="shop IT" />
      <hr />
      <span className="badge badge-danger">{cart.length}</span>
      item(s) in cart
      <hr />

      <Router>
        <div>
          <ul class="nav nav-pills">
            <li class="nav-item">
              <Link class="nav-link" to="/">home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/items">items</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/cart">cart</Link>
            </li>
          </ul>
          <hr />
        </div>
        <Route path="/" exact={true} component={Home} />
        <Route path="/items" render={props => <ItemList onBuy={e => addToCart(e)} />} />
        <Route path="/cart" render={props => renderCart()} />
      </Router>

    </div>
  );
}

export default App;
