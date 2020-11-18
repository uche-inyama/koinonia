import React from 'react';
import { Route, Switch } from 'react-router-dom';
import reset from './reset.css';
import style from './style.css';
import './fontawesome';
import Home from './Home';
import About from './About';
import Viavi from './Viavi';
import Clients from './Clients';
import Services from './Services';
import News from './News'
import Contact from './Contact';

const App = () => {

  return (
    <Switch>
      <Route excat path="/about" component={About}></Route>
      <Route excat path="/contact" component={Contact}></Route>
      <Route excat path="/partners/viavi" component={Viavi}></Route>
      <Route excat path="/clients" component={Clients}></Route>
      <Route excat path="/services" component={Services}></Route>
      <Route excat path="/news" component={News}></Route>
      <Route excat path="/" component={Home}></Route>
    </Switch>
  )
}
export default App;