var ProductCard = React.createClass({

  renderProduct : function() {
    this.props.renderProduct(this.props.id);
  },

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
    return React.createElement("a", {href:"#", className:"link-unstyled"},
      React.createElement("div", {className:"card d-flex", onClick:this.renderProduct},
        React.createElement("img", {className:"card-img-top mx-auto d-block", alt:this.props.product.name, src:this.props.product.imageUrl}),
        React.createElement("div", {className:"container"},
          React.createElement("h5", {onClick:this.renderProduct}, React.createElement("a", {href:"#"}, this.props.product.name)),
          React.createElement("p", {}, this.props.product.description),
          React.createElement("p", {}, "Price: " + this.props.product.price + " wei"),
        )
      )
    );
  }

});