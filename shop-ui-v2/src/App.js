import React, { useState } from 'react';
import './App.css';
import Item from './components/Item';
import Navabar from './components/Navabar';

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

  const addToCart = e => {
    let { item } = e;
    setCart([...cart, item])
  }

  const renderItems = (items) => {
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
      {renderItems(items)}
    </div>
  );
}

export default App;
