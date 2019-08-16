var OrderChecker = React.createClass({

  lookupOrder : function() {
    console.log("TODO")
  },

  render : function() {
    return React.createElement("div", {className:"col-4"},
      React.createElement("h4", {}, "Check an order's status"),
      React.createElement("label", {for:"product-id-input"}, "Input the product and order id"),
      React.createElement("br", {}),
      React.createElement("input", {type:"number", id:"product-id-input"}),
      React.createElement("br", {}),
      React.createElement("input", {type:"number", id:"order-id-input"}),
      React.createElement("br", {}),
      React.createElement("button", {onClick:this.lookupOrder}, "Lookup")
    );
  }
});
