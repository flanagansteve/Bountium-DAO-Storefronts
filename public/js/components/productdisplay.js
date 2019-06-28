var ProductDisplay = React.createClass({

  order : function(productID) {
    var customOptions = {};
    Object.keys(JSON.parse(this.props.product.orderOptions)).map((key) =>
      customOptions[key] = document.getElementById(key).value
    )
    this.props.autobiz.order(productID,
      JSON.stringify(customOptions),
      document.getElementById("customer-info-input-" + productID).value,
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

  optionSetRadioForms : function(key, keynum) {
    return React.createElement("div", {key:keynum},
      React.createElement("h5", {}, "Select your " + key),
      React.createElement("select", {className:"form-control", id:key},
        JSON.parse(this.props.product.orderOptions)[key].map((option, key) =>
          React.createElement("option", {value:option, key:key}, option)
        )
      )
    )
  },

  render : function() {
    return React.createElement("div", {className:"container-fluid row"},
      React.createElement("img", {className:"img col-md-4", alt:this.props.product.name, src:this.props.product.imageUrl}),
      React.createElement("div", {className:"col-md-8 border mt-2 mt-md-0 pt-2"},
        React.createElement("h5", {}, this.props.product.name),
        React.createElement("p", {}, this.props.product.description),
        React.createElement("p", {}, "Price: " + this.props.product.price + " wei"),
        React.createElement("div", {},
          Object.keys(JSON.parse(this.props.product.orderOptions)).map(this.optionSetRadioForms)
        ),
        React.createElement("label", {for:"customer-info-input-" + this.props.id}, "Input your delivery information"),
        React.createElement("br", {}),
        React.createElement("input", {type:"text", id:"customer-info-input-" + this.props.id, className:"form-control", placeholder:"Probably an email or physical address"}),
        React.createElement("br", {}),
        React.createElement("button", {className:"btn btn-primary mb-1", onClick:() => this.order(this.props.id)}, "Order")
      )
    );
  }

});
