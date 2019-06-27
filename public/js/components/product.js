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
    return React.createElement("div", {className:"col-12 col-md-6 col-lg-4 mb-2"},
      React.createElement("div", {className:"card"},
        React.createElement("img", {className:"card-img-top mx-auto d-block", alt:this.props.product.name, src:this.props.product.imageUrl}),
        React.createElement("div", {className:"container"},
          React.createElement("h5", {className:""}, this.props.product.name),
          React.createElement("p", {}, this.props.product.description),
          React.createElement("p", {}, "Price: " + this.props.product.price + " wei"),
          React.createElement("label", {for:"customer-info-input-" + this.props.id}, "Input your delivery information"),
          React.createElement("br", {}),
          React.createElement("input", {type:"text", id:"customer-info-input-" + this.props.id, className:"form-control", placeholder:"Probably an email or physical address"}),
          React.createElement("br", {}),
          React.createElement("button", {className:"btn btn-primary mb-1", onClick:() => this.order(this.props.id)}, "Order")
        )
      )
    );
  }

});
