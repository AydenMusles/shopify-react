var React = require('react');
var GetProducts = require('GetProducts');
var shopify = require('Shopify')
var {browserHistory} = require('react-router');
import 'Styles';
import Header from 'Header';

export var Checkout = React.createClass({
  getInitialState: function (){
      return this.props.location.state;
  },
  componentWillMount:function(){
   shopify.checkout.create().then((res) => {
      this.setState({
        checkout: res,
      });
     this.addLineItems()
    });
  },
  addLineItems:function(){
    const lineItemsToAdd = [
            {variantId: this.props.location.state.product.variants[0].id, quantity: 1}
          ];

    shopify.checkout.addLineItems(this.state.checkout.id, lineItemsToAdd).then((checkout) => {
        this.setState({
          lineItems: checkout.lineItems,
        });
    });
  },
  openCheckout:function() {
    window.open(this.state.checkout.webUrl);
  },
  removeItem:function(){
    browserHistory.push({pathname: '/'});
  },
  render: function () {
      return (
      <div>
      <Header/>
      <div id="checkout-container">
          <div className="row checkout">
              <div className="medium-8 columns">
                <h4>{this.state.product.title}</h4>
                <img src={this.state.product.images[0].src} style={{height:'150px'}} />
              </div>
              <div className="medium-4 columns">
                Quantity: 1
                <p>Price: ${this.state.product.variants[0].price}</p>
                <p><a onClick={this.removeItem}>Remove</a></p>
              </div>
            </div>
          <button className="button outline-button" onClick={this.openCheckout} style={{float:'right'}}>Pay Now</button>
        </div>
      </div>
    );
  }
});


module.exports = Checkout;
