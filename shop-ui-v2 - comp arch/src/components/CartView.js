import React from 'react';

const CartView = (props) => {
    let { value: cart } = props;
    const renderCartItems = () => {
        return cart.map((item, idx) => {
            return (
                <tr key={idx}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>qty</td>
                    <td>total</td>
                </tr>
            )
        })
    }
    return (
        <div className="card">
            <div className="card-header">item(s) in cart</div>
            <div className="card-body">
                <table className="table">
                    <tbody>
                        {renderCartItems()}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CartView;