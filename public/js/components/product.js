var Product = React.createClass({

  order : function(productID) {
    this.props.autobiz.order(productID, document.getElementById("customer-info-input-" + productID).value,
      {from:userAccount, value:this.props.product.price},
      function(err, res) {
        if (err) {
          console.error(err)
        } else {
          // TODO why don't this run on tx confirm :(((
          alert("Your order has been sent and is awaiting confirmation");
        }
      }
    );
  },

  render : function() {
    return React.createElement("div", {className:"product-card"},
      React.createElement("h5", {}, this.props.product.name),
      React.createElement("img", {className:"product-card-img", src:this.props.product.imageUrl}),
      React.createElement("p", {}, this.props.product.description),
      React.createElement("p", {}, "Price: " + this.props.product.price + " wei"),
      React.createElement("label", {for:"customer-info-input-" + this.props.id}, "Input your delivery information"),
      React.createElement("br", {}),
      React.createElement("input", {type:"text", id:"customer-info-input-" + this.props.id, placeholder:"A email or physical address, most likely"}),
      React.createElement("br", {}),
      React.createElement("button", {className:"order-btn", onClick:() => this.order(this.props.id)}, "Order")
    );
  }

});
