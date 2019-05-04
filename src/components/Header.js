import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


// const MyLink = props => <Link to="/open-collective" {...props} />
  
const Header = () => {
    
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                <List component="nav">
                    <ListItem component="div" >
                        <ListItemText inset>
                            <Typography variant="title" color="inherit">
                            React, Redux & Material-UI Shopping Cart
                            </Typography>
                        </ListItemText>
                        <ListItemText inset>
                            <Typography variant="title" color="inherit">
                                Home
                            </Typography>
                        </ListItemText>
                        <ListItemText inset>
                            <Typography variant="title" color="inherit">
                                Products
                            </Typography>
                        </ListItemText>
                        <ListItemText inset>

                        <Button component="a" variant="outlined" href="#outlined-buttons" >
                        Link
                        </Button>
                        </ListItemText>
                    </ListItem >
                </List>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default Header;