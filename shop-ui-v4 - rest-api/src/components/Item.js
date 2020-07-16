import React, { useState, useEffect } from 'react';
import Review from './Review';
import ReviewForm from './ReviewForm';

import axios from 'axios';

const Item = (props) => {

    const [tab, setTab] = useState(1)
    const [reviews, setReviews] = useState([])

    const { value: item } = props


    useEffect(() => {
        if (tab === 3) {
            axios.get(`http://localhost:8080/api/items/${item.id}/reviews`)
                .then(response => response.data)
                .then(reviews => {
                    setReviews([...reviews])
                })
        }
    }, [tab])

    const changeTab = (e, tabIndex) => {
        e.preventDefault()
        setTab(tabIndex) // trigger diffing algorithms on virtual-DOM 
    }

    const handleBuyBtnClick = e => {
        let { onBuy } = props;
        onBuy({ item })
    }

    const handleNewReview = e => {
        let { review } = e
        axios.post(`http://localhost:8080/api/items/${item.id}/reviews`, review)
            .then(response => response.data)
            .then(review => {
                setReviews([review, ...reviews])
            })
    }

    const renderBuyBtn = (item) => {
        if (item.canBuy)
            return (<button onClick={e => handleBuyBtnClick()} className="btn btn-sm btn-primary">buy</button>)
        else return null
    }

    const renderReviews = () => {
        return reviews.map((review, idx) => {
            return (
                <div key={idx}>
                    <Review value={review} />
                </div>
            )
        })
    }

    const renderTabPanel = item => {
        switch (tab) {
            case 1: return (<div>{item.description}</div>)
            case 2: return (<div>Not Yet</div>)
            case 3: return (
                <div>
                    {renderReviews()}
                    <hr />
                    <ReviewForm onSubmit={e => handleNewReview(e)} />
                </div>
            )
            default: return null
        }
    }


    return (
        <div>
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
        </div>
    );
};

export default Item;