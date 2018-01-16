var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, browserHistory} = require('react-router');
var Store = require('Store');
var Product = require('Product');
var Checkout = require('Checkout');


    ReactDOM.render(
      <Router history={browserHistory} >
        <Route path='/'  component={Store}/>
        <Route path='/product' name="product" component={Product}/>
        <Route path='/checkout' name="checkout" component={Checkout}/>
        </Router>,
      document.getElementById('app')
    );
