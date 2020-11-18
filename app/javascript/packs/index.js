// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import reducer from '../reducer'


import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);

const store = createStore(
  reducer,
  {},
  compose(
    middleware,
    window.devToolsExtension ? window.devToolsExtension() : (f) => f,
  ),
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </Provider>,
    document.body.appendChild(document.createElement('div'))
  )
})
