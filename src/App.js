import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import HomePage from './Views/Home/Home';
import AboutPage from './Views/About/About';
import ProductPage from './Views/Products/ProductsPage';
import CartPage from './Views/Cart/Cart';
import ContactPage from './Views/Contact/Contact';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    },
  layoutComponent: {
    height: '100vh', 
    padding: '13px',
    width: '100%',
  },
}));

export default function App() {

  const classes = useStyles();
  
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <Router>
          
        <div className={classes.root}>
          <AppBar position="static">
              <Tabs value={value} onChange={handleChange} aria-label="abs">
                  <Tab label="Home" component={Link} to="/"/>
                  <Tab label="Products" component={Link} to="/products"/>
                  <Tab label="Cart" component={Link} to="/cart"/>
                  <Tab label="Contact" component={Link} to="/contact"/>
                  <Tab label="About" component={Link} to="/about"/>
              </Tabs>
          </AppBar>
       </div>  

                  <Typography  className={classes.layoutComponent} >
                      <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/products" component={ProductPage}/>
                        <Route path="/cart" component={CartPage}/>
                        <Route path="/contact" component={ContactPage}/>
                        <Route path="/about" component={AboutPage}/>
                      </Switch>
                </Typography>

    </Router>
  );
}



