
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom"
import Home from './MainBody/Home';
import Login from './MainBody/Login';
import ProductDetail from './MainBody/ProductDetail';
import Products from './MainBody/Products';
import ProductSummary from './MainBody/ProductSummary';
import Register from './MainBody/Register';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DataProvider from './Context';
import Cart from './MainBody/Cart';
import Checkout from './MainBody/Checkout';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

toast.configure()
class App extends Component {
  render() {
    return (
      <DataProvider>
      <div>
        <Router>
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/product_summary" exact component={ProductSummary} />
              <Route path="/products/:id" component={ProductDetail} />
              <Route path="/products" exact component={Products} />
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
              <Route path="/cart" exact component={Cart} />
              <Route path="/checkout" exact component={Checkout} />
          </Switch>
        </Router>
      </div>
      </DataProvider>
    );
  }
}

export default App;
