import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Products from './components/Products'

class Cart extends Component {
  render() {
    return (
      <Provider store={store}>
        <Products />
      </Provider>
    )
  }
}

export default Cart
