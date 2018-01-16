var React = require('react');
var {browserHistory} = require('react-router');
import 'Styles';

var StoreCard = React.createClass({
  handleView: function (id){
    browserHistory.push({pathname: '/product',query:{id:id.id}});
  },
  render: function () {
    var {id,name,description,image,category} = this.props;
    return (
    <div className="medium-4 columns" style={{minHeight:'300px'}}>
      <div className="product-card">
        <h4>{name}</h4>
        <img className="product-image" src={image}/>
        <button className="button outline-button" onClick={()=>{this.handleView({id})}} >View</button>
      </div>
    </div>
    )
  }
});

module.exports = StoreCard;
