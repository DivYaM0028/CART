import React from 'react';

class CartItem extends React.Component {
    
    render(){
        const {price , title , qty} = this.props.product;
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
                            onClick={() => this.props.onIncreaseQuantity(this.props.product)}
                         />
                        <img
                            alt="decrease" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/992/992683.svg" 
                            onClick={this.decreaseQuantity} 
                                                      
                        />
                        <img 
                            alt="delete"
                            className="action-icons"
                            src="https://image.flaticon.com/icons/svg/1214/1214428.svg" 
                        />
                    </div>
                </div>

            </div>
        )
    }
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