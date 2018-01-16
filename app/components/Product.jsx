var React = require('react');
var GetProducts = require('GetProducts');
var shopify = require('Shopify')

var {browserHistory} = require('react-router');
import 'Styles';
import Header from 'Header';

export var Product = React.createClass({

  getInitialState: function (){
    console.log('product component')
     return {
      loading:true
     };
  },
  componentWillMount: function() {
    shopify.product.fetch(this.props.location.query.id).then((product) => {
      this.setState({
        product: product,
        loading:false
      });
});
  },

  buyProduct:function(id){
    console.log(id)
    browserHistory.push({pathname: '/checkout',query:{id:id.id},state:this.state});
  },
  renderProduct:function(){
    if(this.state.loading){
      return <div id="product-loading"><i className="fa fa-spinner fa-spin" ref="spinner" aria-hidden="true"></i></div>;
    }else {
      var id = this.state.id;
      return <div className="row product-container"><div className="medium-6 columns"><img width="300px" id="prod-image" src={this.state.product.images[0].src}/></div><div className="medium-6 columns"><h2>{this.state.product.title}</h2><p>{this.state.product.description}</p><h4>${this.state.product.variants[0].price}</h4><button className="button outline-button" onClick={()=>{this.buyProduct({id})}}>Buy Now</button></div></div>;
    }
  },
  render: function () {

      return (
      <div>
      <Header/>
        {this.renderProduct()}
      </div>
    );

  }
});


module.exports = Product;
