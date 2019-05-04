import React, { Component } from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchProducts, fetchCart, filterMethod, getCategories } from '../actions/productActions'
import Grid from '@material-ui/core/Grid'
import FilterPane from './FilterPane'
import Header from './Header'
import Card from './Card'
import CartDrawer from './cartDrawer';



class Products extends Component {

    constructor(){
      super()

      this.state={
        
          female:false,
          male:false,
          child:false,
          accessory:false,
          categories:[]
      }

      this.changeHandle = this.changeHandle.bind(this)
    }

    componentDidMount(){
      let cart = []
      localStorage.setItem('cart', JSON.stringify(cart))
    }

    componentWillMount(){
        this.props.fetchProducts()
        this.props.fetchCart()
    }

    componentWillReceiveProps(nextProps){
      // console.log(nextProps)
    }

    changeHandle = (fields) => {
      this.props.filterMethod(fields)
    }

  render() {

      // console.log(this.props.products)

      const products = this.props.products.map(product => (
        <Grid item md={3}  key={product.id}>
          <Card products={product} />
        </Grid>
      ))
      

    return (
      <div>


        <Header />
          <CartDrawer />
        <Grid container spacing={24} id="cart">
          <Grid item xs={1}></Grid>
          <Grid item xs={2}>
            <FilterPane filters={this.state.categories} changeHandle={this.changeHandle}/>
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={40}>
                {products} 
            </Grid>
          </Grid>
          <Grid item xs={1}></Grid>
      </Grid>
      </div>
    )
  }
}

Products.propTypes = {
    fetchProducts:propTypes.func.isRequired,
    products:propTypes.array.isRequired,
    // cart:propTypes.array.isRequired
    // newProduct:propTypes.object
}


const mapStateToProps = state => ({
    products:state.products.products,
    cart:state.products.cart,
    categories:state.products.categories
    // newProduct:state.products.product
})

export default connect(mapStateToProps, { fetchProducts,fetchCart,filterMethod, getCategories })(Products)