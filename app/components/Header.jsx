var React = require('react');
var {browserHistory} = require('react-router');
var Navigation = require('Navigation');
var $ = require('jquery');
import 'Styles';

export var Header = React.createClass({

  getInitialState: function (){
     return {
     };
  },
  componentWillMount: function() {

  },
  render: function () {
      return (
      <div id="header" className="top-bar">
       <div className="top-bar-left">
      <a href="/"><img src='./images/logo.png'/></a>
      </div>
      <div className="top-bar-right">
      <Navigation/>
      </div>
      </div>
    );

  }
});


module.exports = Header;
