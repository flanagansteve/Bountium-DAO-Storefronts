var Welcome = React.createClass({

  render : function() {
    var br = React.createElement("br", {});
    return React.createElement("div", {className:"welcome"},
      React.createElement("h1", {}, "Welcome!"),
      React.createElement("div", {className:"view-store-form"},
        React.createElement("h4", {}, "Shop at an autobiz"),
        React.createElement("p", {}, "Example at: 0xa24af57cf89ac03a5b760e2955ed288266270cd2"),
        React.createElement("input", {type:"text", id:"store-addr-input", placeholder:"Desired Autobiz's address"}),
        br, br,
        React.createElement("button",
          {id:"store-addr-input-btn", onClick:() => {this.props.renderStore(document.getElementById("store-addr-input").value)}},
        "Go!")
      )
    )
  }
});
