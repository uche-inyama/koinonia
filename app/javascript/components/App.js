import React from 'react'
import { Route, Switch } from 'react-router-dom'


const App = () => {
  return (
    <Switch>
      <Route excat path="/" component={Home}></Route>
      <Route excat path="/about" component={About}></Route>
      <Route excat path="/koinomia/:vendor" component={Vendors}></Route>
      <Route excat path="/koinomia/:product" component={Products}></Route>
      <Route excat path="/contact" component={Contact}></Route>
    </Switch>
  )
}
export default App;