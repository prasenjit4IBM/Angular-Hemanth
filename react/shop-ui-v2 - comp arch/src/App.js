import React, { useState } from 'react';
import './App.css';
import Item from './components/Item';
import Navabar from './components/Navabar';
import CartView from './components/CartView';

function App() {

  const items = [
    {
      id: 1,
      name: 'laptop',
      price: 1000.00,
      description: 'New mac pro',
      imagePath: 'images/laptop.png',
      canBuy: true
    },
    {
      id: 2,
      name: 'mobile',
      price: 2000.00,
      description: 'New iphone pro',
      imagePath: 'images/mobile.png',
      canBuy: true
    }
  ]

  const [cart, setCart] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);

  const toggleCart = e => {
    e.preventDefault();
    setCartOpen(!isCartOpen)
  }

  const addToCart = e => {
    let { item } = e;
    setCart([...cart, item])
  }

  const renderCart = () => {
    if (isCartOpen)
      return <CartView value={cart} />
  }

  const renderItems = (items) => {
    if (!isCartOpen)
      return items.map(item => {
        return (
          <Item value={item} key={item.id} onBuy={e => addToCart(e)} />
        )
      })
  }


  return (
    <div className="container">
      <Navabar title="shop IT" />
      <hr />
      <span className="badge badge-danger">{cart.length}</span>
      item(s) in cart
      <hr />
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a class="nav-link" onClick={e => toggleCart(e)} href="/">{isCartOpen ? 'items' : 'cart'}</a>
        </li>
      </ul>
      <hr />
      {renderCart()}
      <hr />
      {renderItems(items)}
    </div>
  );
}

export default App;
