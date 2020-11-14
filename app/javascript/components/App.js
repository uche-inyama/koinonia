import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import reset from './reset.css';
import style from './style.css';
import Home from './Home';
import About from './About';
import Products from './Products';
import Vendors from './Vendors';
import Contact from './Contact';

const App = () => {

  return (
    <Switch>
      <Route excat path="/about" component={About}></Route>
      <Route excat path="/contact" component={Contact}></Route>
      <Route excat path="/koinonia/vendors" component={Vendors}></Route>
      <Route excat path="/koinonia/products" component={Products}></Route>
      <Route excat path="/" component={Home}></Route>
    </Switch>
  )
}
export default App;