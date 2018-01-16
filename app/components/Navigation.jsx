var React = require('react');
var {Link, IndexLink} = require('react-router');
import 'Styles';


var Navigation = React.createClass({
  render: function () {
    return (
          <ul id="menu">
            <li>
              <IndexLink to="/" activeClassName="active" style={{color:'#0d1228'}} activeStyle={{color:'#0d1228',textDecoration:'underline'}}>Shop</IndexLink>
            </li>
          </ul>
        );
  }
});

module.exports = Navigation;
