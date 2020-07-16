import React, { useEffect, useState } from 'react';
import Item from './Item';
import axios from 'axios';

const ItemList = (props) => {

    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/api/items')
            .then(response => response.data)
            .then(items => {
                setItems(items)
            })
    }, [])

    const renderItems = () => {
        return items.map(item => {
            return (
                <Item value={item} key={item.id} onBuy={props.onBuy} />
            )
        })
    }

    return (
        <div>
            {renderItems()}
        </div>
    );
};

export default ItemList;
