var Header = React.createClass( {
  render: function() {
    return React.createElement( "nav", { className: "navbar navbar-light", style: { backgroundColor: "#e9ecef" } },
      React.createElement( "h1", { className: "navbar-brand mx-0 my-0" },
        React.createElement( "a", { href: "./", className: "navbar-brand mr-0 mr-md-2" },
          "Bountium"
        )
      ),
      React.createElement( "div", { className: "ml-auto" },
        React.createElement( "ul", { className: "nav navbar-collapse" },
          React.createElement( "li", { className: "nav-item ml-auto" },
            React.createElement( "a", { href: "./", className: "nav-link" },
              "Search for Products"
            )
          ),
          React.createElement( "li", { className: "nav-item" },
            "Built on ",
            React.createElement( "a", { href: "http://bountium.org" },
              "Bountium"
            )
          )
        )
      )
    );
  }
} );

window.onload = function() {
  ReactDOM.render(
    React.createElement( Header, {} ),
    document.getElementById( "header" )
  );
}
