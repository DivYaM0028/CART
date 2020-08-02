import React from 'react';

class CartItem extends React.Component {
    constructor (){
        super();
        this.state ={
            price: 999,
            title: 'Phone',
            qty: 1,
            img : ''
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    increaseQuantity = () => {
        console.log('test');
    }
    render(){
        const {price , title , qty} = this.state;
        return(
            <div className='cart-item'>
                <div className="left-block">
                    <img  style={styles.image}/>
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
                            onClick={this.increaseQuantity}
                         />
                        <img
                            alt="decrease" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/992/992683.svg"  
                                                      
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