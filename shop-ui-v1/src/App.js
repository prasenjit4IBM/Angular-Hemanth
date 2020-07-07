import React, { useState } from 'react';
import './App.css';

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

  const [tab, setTab] = useState(1)

  const changeTab = (e, tabIndex) => {
    e.preventDefault()
    setTab(tabIndex) // trigger diffing algorithms on virtual-DOM 
  }

  const renderBuyBtn = (item) => {
    if (item.canBuy)
      return (<button className="btn btn-sm btn-primary">buy</button>)
    else return null
  }

  const renderTabPanel = item => {
    switch (tab) {
      case 1: return (<div>{item.description}</div>)
      case 2: return (<div>Not Yet</div>)
      case 3: return (<div>None Yet</div>)
      default: return null
    }
  }

  const renderItems = (items) => {
    return items.map(item => {
      return (
        <div className="list-group-item" key={item.id}>
          <div className="row">
            <div className="col-3">
              <img src={item.imagePath} alt={item.name} className="img-fluid" />
            </div>
            <div className="col-9">
              <h5>{item.name}</h5>
              <h6>{item.price}</h6>
              {renderBuyBtn(item)}

              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a className={tab === 1 ? 'nav-link active' : 'nav-link'} href="/" onClick={e => changeTab(e, 1)}>Description</a>
                </li>
                <li className="nav-item">
                  <a className={tab === 2 ? 'nav-link active' : 'nav-link'} href="/" onClick={e => changeTab(e, 2)}>Specification</a>
                </li>
                <li className="nav-item">
                  <a className={tab === 3 ? 'nav-link active' : 'nav-link'} href="/" onClick={e => changeTab(e, 3)}>Reviews</a>
                </li>
              </ul>
              {renderTabPanel(item)}
            </div>
          </div>
        </div>
      )
    })
  }


  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">shop IT</span>
      </nav>
      <hr />
      <hr />
      {renderItems(items)}
    </div>
  );
}

export default App;
