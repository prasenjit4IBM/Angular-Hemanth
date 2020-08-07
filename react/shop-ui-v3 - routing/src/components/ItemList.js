import React from 'react';
import Item from './Item';

const ItemList = (props) => {

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
