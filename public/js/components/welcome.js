var Welcome = React.createClass({

  render : function() {
    var br = React.createElement("br", {});
    return React.createElement("div", {className:"container"},
      React.createElement("h1", {}, "Welcome!"),
      React.createElement("div", {className:"view-store-form"},
        React.createElement("h4", {}, "Shop at a Bountium-powered business"),
        React.createElement("p", {}, "Example on the Ropsten network at: 0xa24af57cf89ac03a5b760e2955ed288266270cd2"),
        React.createElement("input", {type:"text", id:"store-addr-input", placeholder:"Desired business's address"}),
        br, br,
        React.createElement("button",
          {id:"store-addr-input-btn", onClick:() => {this.props.renderStore(document.getElementById("store-addr-input").value)}},
        "Go!")
      )
    )
  }
});
