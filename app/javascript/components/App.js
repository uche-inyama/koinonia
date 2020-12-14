import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import reset from './reset.css';
import style from './style.css';
import './fontawesome';
import Home from './Home/Home';
import About from './About/About';
import Clients from './Clients';
import Services from './Services';
import News from './News'
import Contact from './Contact';
import Products from './Partners/Products'
import ProductDetail from './Partners/productDetail'
import { getPartners, getProducts } from '../action'


const App = ({ loadPartners, loadProducts }) => {

  useEffect(() => {
    loadPartners();
    // loadProducts();
  }, [])

  return (
    <Switch>
      <Route excat path="/about" component={About}></Route>
      <Route excat path="/contact" component={Contact}></Route>
      <Route excat path="/partners/:slug" component={Products}></Route>
      <Route excat path="/products/:slug/:id/" component={ProductDetail}></Route>
      <Route excat path="/clients" component={Clients}></Route>
      <Route excat path="/services" component={Services}></Route>
      <Route excat path="/news" component={News}></Route>
      <Route excat path="/" component={Home}></Route>
    </Switch>
  )
}

const mapDispatchToProps = dispatch => ({
  loadPartners: (() => {
    dispatch(getPartners());
  }),
  loadProducts: (() => {
    dispatch(getProducts());
  }),
});

export default connect(null, mapDispatchToProps)(App);

