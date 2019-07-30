var ProductCard = React.createClass({

  renderProduct : function() {
    this.props.renderProduct(this.props.id);
  },

  render : function() {
    return React.createElement("a", {href:"#", className:"link-unstyled"},
      React.createElement("div", {className:"card", onClick:this.renderProduct},
        React.createElement("img", {className:"card-img-top mx-auto d-block", alt:this.props.product.name, src:this.props.product.imageUrl}),
        React.createElement("div", {className:"card-body"},
          // TODO can we make the product name appear as a link w/o really being a link?
          React.createElement("h5", {}, React.createElement("p", {className:"card-link"}, this.props.product.name)),
          React.createElement("p", {}, this.props.product.description),
          React.createElement("p", {}, "Price: " + web3.fromWei(this.props.product.price, "ether") + " ETH"),
          React.createElement("button", {className:"btn btn-info mb-1", onClick:this.renderProduct}, "Order")
        )
      )
    );
  }

});
