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

    const renderCart = () => {
        if (cart.length === 0) return (<div>cart is empty</div>)
        else return (
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
        )
    }

    return (
        <div>
            {renderCart()}
        </div>
    );
};

export default CartView;