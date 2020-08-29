import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import './App.css';
import * as firebase from 'firebase'
class App extends   React.Component {
  constructor (){
    super();
    this.state ={
        products:[],
        loading: true
    }
    this.db = firebase.firestore();
    // this.increaseQuantity = this.increaseQuantity.bind(this);
}

componentDidMount(){
  // firebase
  //   .firestore()
  //   .collection('products')
  //   .get()
  //   .then((snapshot) => {
  //     snapshot.docs.map((doc) => {
  //     });
  //     const products = snapshot.docs.map((doc) => {
  //       const data = doc.data();
  //       data['id'] = doc.id;
  //       return  data;
  //     })

  //     this.setState({
  //       products,
  //       loading:false
  //     })
  //   })
    this.db
    .collection('products')
    .onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
      });
      const products = snapshot.docs.map((doc) => {
        const data = doc.data();
        data['id'] = doc.id;
        return  data;
      })

      this.setState({
        products,
        loading:false
      })
    })
}


handleIncreaseQuantity = (product) => {
    const{ products} = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
        products: products
        // products
    })
}

handleDecreaseQuantity = (product) => {
    const{ products} = this.state;
    const index = products.indexOf(product);
    if(products[index].qty === 0)
    {
        return;
    }
    products[index].qty -= 1;

    this.setState({
        products: products
        // products
    })
}

handleDeleteProduct = (id) =>{
    const{ products } = this.state;
    const items = products.filter((item) => item.id !== id);

    this.setState({
        products:items
    })
}

getCartCount = () => {
  const { products } = this.state;
  
  let count = 0;

  products.forEach((product) =>{
    count+= product.qty
  })

  return count;
}
getCartTotal = () => {
  const {products} = this.state;
  let cartTotal = 0;
  products.map((product) => {
    cartTotal = cartTotal + (product.qty* product.price) 
  })
  return cartTotal;
}

addProduct = () =>{
  this.db
    .collection('products')
    .add({
      img:'',
      price:900,
      qty:3,
      title: 'Washing Machine'
    })
    .then((docRef) => {

    })
    .catch((error) => {
      console.log('Error:')
    })
}
  
  render(){
    const { products , loading } = this.state;
    return (
      <div className="App">
            <Navbar count={this.getCartCount()} />
            <button onClick={this.addProduct} style= {{padding:20 }}>Add a Product</button>
            <Cart
            products = {products}
              onIncreaseQuantity = {this.handleIncreaseQuantity}
              onDecreaseQuantity = {this.handleDecreaseQuantity}
              onDeleteProduct = {this.handleDeleteProduct}   
            />
            {loading && <h1>Loading Products...</h1>}
            <div style={{padding:10, fontSize: 30}}>TOTAL: {this.getCartTotal()}</div> 
      </div>
    );
  } 
}


export default App;
