import React from 'react';
// Added funcitonal component
const CartItem = (props) => {
    const {price , title , qty} = props.product;
    const {
        product,
        onIncreaseQuantity,
        onDecreaseQuantity,
        onDeleteProduct
    } = props;
    return(
        <div className='cart-item'>
            <div className="left-block">
                <img  style={styles.image} alt=""/>
                </div>
            <div className="right-block">
                <div style={{fontSize: 25}}>{title}</div>
                <div style={{fontSize: 25}}>Rs: {price} </div>
                <div style={{fontSize: 25}}>Qty: {qty}</div>
                <div className="cart-item-actions">
                    <img 
                        alt="increase" 
                        className="action-icons"
                        src="https://image.flaticon.com/icons/svg/992/992651.svg" 
                        onClick={() => props.onIncreaseQuantity(props.product)}
                        />
                    <img
                        alt="decrease" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/992/992683.svg" 
                        onClick={() => props.onDecreaseQuantity(props.product)} 
                                                    
                    />
                    <img 
                        alt="delete"
                        className="action-icons"
                        src="https://image.flaticon.com/icons/svg/1214/1214428.svg" 
                        onClick={() => props.onDeleteProduct(product.id)}
                    />
                </div>
            </div>

        </div>
    )
}

const styles = {
    image:{
      height: 150,
      width: 150,
      borderRadius: 4,
      background: '#ccc'
    }
  }
  

export default CartItem;