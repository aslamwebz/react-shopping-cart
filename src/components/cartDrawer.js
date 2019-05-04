import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import Swal from 'sweetalert2'

export default class cartDrawer extends Component {

    state = {
        top: false,
        left: false,
        bottom: false,
        right: false,
        cart:[],
        shopping:false,
      };

      constructor(){
          super()
          
        this.removeCart = this.removeCart.bind(this)
        this.checkOut = this.checkOut.bind(this)
      }


    toggleDrawer = (side, open) => () => {
        let lcart = JSON.parse(localStorage.getItem('cart'))
        this.setState({
          [side]: open,
          cart:lcart,
        });
      };

      removeCart(product){
        let cart = JSON.parse(localStorage.getItem('cart'))
        cart.map(item => {
          if(item.id === product.id){
            if(item.quantity <= 1){
                console.log(item)
                // cart.splice(item, 1)
                cart = cart.filter(it => {
                    return it !== item
                })
              } else {
                item.quantity--;
              }

          }
          return cart;

        })
  
        localStorage.setItem('cart', JSON.stringify(cart))
        let lcart = JSON.parse(localStorage.getItem('cart'))
        this.setState({
          cart:lcart,
        });
      }  

      checkOut(){
        this.setState({
          cart:[],
        });
        let cart = []
        localStorage.setItem('cart', JSON.stringify(cart))
        Swal.fire(
          'Payment Accepted!',
          'Please wait for the purchased items for delivery!',
          'success'
        )
      }

      


    
  render() {

    const pStyle = {
      textAlign: 'right !important',
    };

      const cart = this.state.cart.map(item => (
          <Grid key={item.id} xs={10} id="cartpane">
              <List >
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={item.name}
                      secondary={item.quantity}
                    />
                    <ListItemSecondaryAction>
                    <Button onClick={() => { this.removeCart(item)}}>
                        <DeleteIcon />
                        </Button>
                    </ListItemSecondaryAction>
                  </ListItem>,
              </List>
          </Grid>
      ))
    return (
        <Grid container >
            <Button onClick={this.toggleDrawer('right', true)} variant="contained" color="secondary" style={pStyle}>View Cart</Button>
            <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
              <Button onClick={this.toggleDrawer('right', false)} id="close-btn">X</Button>
              <div id="cartDrawer"
                  tabIndex={0}
                  role="button"
                  // onClick={this.toggleDrawer('right', false)}
                  // onKeyDown={this.toggleDrawer('right', false)}
              >
                  {cart}
              </div>
              <Button onClick={this.checkOut} variant="contained" size="large" color="primary" id="checkout-btn">Check Out</Button>
            </Drawer>
        </Grid>
    )
  }
}



