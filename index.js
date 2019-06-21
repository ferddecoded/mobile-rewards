import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import { Router, Route, hashHistory, IndexRedirect } from 'react-router'

import Application from './src/containers/Application'
import Points from './src/containers/Points'
import Offers from './src/containers/Offers'
import Rewards from './src/containers/Rewards'

import points from './src/reducers/points'
import offers from './src/reducers/offers'
import rewards from './src/reducers/rewards'

import './index.css'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const store = createStore(
  combineReducers({ points, offers, rewards }),
  composeEnhancers(applyMiddleware(thunk)),
  // added support for redux devtools in the browser
  // for better debugging and checking application state
)

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Application}>
        <IndexRedirect to="/points" />
        <Route path="points" component={Points} />
        <Route path="offers" component={Offers} />
        <Route path="rewards" component={Rewards} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
