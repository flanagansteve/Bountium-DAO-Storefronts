var Welcome = React.createClass({

  render : function() {
    return React.createElement("div", {className:"container"},
      React.createElement("h1", {}, "Welcome!"),
      React.createElement("h4", {}, "Shop at a Bountium-powered business"),
      React.createElement("p", {}, "Get some official Bountium gear through our store at address: ",
        React.createElement("a", {href:"./?0x4dba8f8581d8fddfccb227db4845129c2bcec74f"}, "0x4dba8f8581d8fddfccb227db4845129c2bcec74f")
      ),
      React.createElement("p", {}, "Example on the Ropsten network at: ",
        React.createElement("a", {href:"./?0xefe00cbd5bf51bf8f3cf5804650fd8e3fd5e9ec2"}, "0xefe00cbd5bf51bf8f3cf5804650fd8e3fd5e9ec2")
      ),
      React.createElement("input", {type:"text", className:"form-control", id:"store-addr-input", placeholder:"Desired business's address"}),
      React.createElement("button",
        {id:"store-addr-input-btn", className: "btn btn-primary mt-2", onClick:() => {this.props.renderStore(document.getElementById("store-addr-input").value)}},
      "Go!")
    )
  }
});
