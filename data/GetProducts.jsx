var axios = require('axios');
const PATH = 'http://localhost:3000/';
// const PATH = 'https://mighty-beach-23452.herokuapp.com/';


module.exports = {
  getProducts:function(){
    var requestUrl = "https://edicionuno.myshopify.com/api/graphql";

    return axios.request({
      method:'get',
      url:requestUrl,
        headers: {
          'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT,
          'Content-Type':'application/graphql'
        }
    }).then(function(res,err){
      if(res){
        return res.data;
      } else {
        return err;
      }
    },function(res){
      throw new Error('error');
    })
  },
    getProduct:function(id){
    var requestUrl = `${PATH}`+`products/`+id;

    return axios.request({
      method:'get',
      url:requestUrl,
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
    }).then(function(res,err){
      if(res){
        return res.data;
      } else {
        return err;
      }
    },function(res){
      throw new Error('error');
    })
  }
}
