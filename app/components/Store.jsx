var React = require('react');
var GetProducts = require('GetProducts');
var StoreCard = require('StoreCard');
var shopify = require('Shopify')
var {browserHistory} = require('react-router');
import 'Styles';
import Header from 'Header';


export var Store = React.createClass({

  getInitialState: function (){
     return {
      products:[]
     };
  },
  componentWillMount: function() {
    shopify.product.fetchAll().then((res) => {
      this.setState({
        products: res,
      });
    });
      },
  render: function () {
      return (
      <div>
      <Header/>
      <div className="row" id="store" style={{paddingTop:'45px'}}>
      {this.state.products.map(function(product) {
        console.log(this.state.products)
            return  <StoreCard id={product.id} name={product.title} category={product.product_type} image={product.images[0].src} description={product.body_html}/>
        }.bind(this))}
        </div>
      </div>
    );

  }
});


module.exports = Store;

