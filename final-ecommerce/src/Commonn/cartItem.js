import React from 'react';


class CartItem extends React.Component {

    render() {
        return (
            <div className='cartItem'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h5>{this.props.cartItem.title} <p pullRight>Price: INR {this.props.cartItem.price}</p></h5>
                    </div>
                    <div className='col-md-3'>
                        <p>units :&nbsp;
                            <h6 bsStyle='success'> {this.props.cartItem.units} </h6>
                            &nbsp;
                            <button bsSize='small' onClick={() => this.props.onAddUnit()}>+</button>
                            <button bsSize='small' onClick={() => this.props.onDeductUnit()}>-</button>
                        </p>
                    </div>
                    <div className='col-md-3'>
                        <button onClick={() => this.props.handleDeleteFromCart()}
                                bsSize='small' bsStyle='danger'>DEL</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartItem;