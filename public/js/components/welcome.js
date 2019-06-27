var Welcome = React.createClass({

  render : function() {
    return React.createElement("div", {className:"container"},
      React.createElement("h1", {}, "Welcome!"),
      React.createElement("h4", {}, "Shop at a Bountium-powered business"),
      React.createElement("p", {}, "Example on the Ropsten network at: 0xa24af57cf89ac03a5b760e2955ed288266270cd2"),
      React.createElement("input", {type:"text", className:"form-control", id:"store-addr-input", placeholder:"Desired business's address"}),
      React.createElement("button",
        {id:"store-addr-input-btn", className: "btn btn-primary mt-2", onClick:() => {this.props.renderStore(document.getElementById("store-addr-input").value)}},
      "Go!")
    )
  }
});
