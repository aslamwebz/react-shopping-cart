import React, { Component } from 'react'
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";



class CardItem extends Component {
    constructor(){
        super()
        this.addCart = this.addCart.bind(this)
    }

    addCart(){
      let alreadyInCart = false;
      let cart = JSON.parse(localStorage.getItem('cart'))
      let product = this.props.products;

      cart.map(item => {
        if(item.id === product.id){
          alreadyInCart = true;
          item.quantity += product.quantity
        }

        return item
      })

      if(alreadyInCart === false ){
        cart.push(this.props.products)
      }
      
      localStorage.setItem('cart', JSON.stringify(cart))
    }
    
  render() {
    return (
        <Grid container alignItems="center" id="card">
        <Card >
          <CardActionArea>
          
            <CardMedia class="card-content"
              component="img"
              alt="Contemplative Reptile"
              height="400"
              width="auto"
              image={this.props.products.url}
              title="Contemplative Reptile"
            />
              <hr /> 

            <CardHeader
          title={this.props.products.name}
          subheader={this.props.products.price}
        />
            <CardContent >
              {/* <Typography gutterBottom variant="h4" component="h2">
                {this.props.products.title}
              </Typography> */}
              {/* <h2>{this.props.products.title}</h2> */}
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button varient="extended"  color="primary" onClick={this.addCart} id="checkout-btn">
              Add To Cart
            </Button>

          </CardActions>

          
        </Card>
     </Grid>
    )
  }
}



export default CardItem