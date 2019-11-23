import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import { AppBar, Tab, Tabs, Tooltip, Fab } from '@material-ui/core';
import HomePage from './Views/Home/Home';
import AboutPage from './Views/About/About';
import ProductPage from './Views/Products/ProductsPage';
// import CartPage from './Views/Cart/Cart';
import ContactPage from './Views/Contact/Contact';
import {Home, Devices, ContactMail, Info, ShoppingCart as CartIcon} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    },
    absolute: {
      position: 'absolute',
      bottom: theme.spacing(4),
      right: theme.spacing(5),
    },
}));

export default function App() {

  const classes = useStyles();
  
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    < >
    <Router>
          
        <div className={classes.root}>
          <AppBar position="static">
              <Tabs value={value} onChange={handleChange} aria-label="abs">
                  <Tab icon={<Home/>} label="Home" component={Link} to="/"/>
                  <Tab icon={<Devices/>} label="Products" component={Link} to="/products"/>
                  {/* <Tab label="Cart" component={Link} to="/cart"/> */}
                  <Tab icon={<ContactMail/>} label="Contact" component={Link} to="/contact"/>
                  <Tab icon={<Info/>} label="About" component={Link} to="/about"/>
              </Tabs>
          </AppBar>
       </div>  

       <Switch >
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/products" component={ProductPage}/>
                        {/* <Route path="/cart" component={CartPage}/> */}
                        <Route path="/contact" component={ContactPage}/>
                        <Route path="/about" component={AboutPage}/>
       </Switch> 


    </Router>
    
            <Tooltip title="My shopping list" aria-label="shopping item">
                <Fab color="secondary" className={classes.absolute}>
                    <CartIcon />
                </Fab>
            </Tooltip>
    </>
  );
}



