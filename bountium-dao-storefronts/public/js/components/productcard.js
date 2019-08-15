var ProductCard = React.createClass( {

  renderProduct: function() {
    this.props.renderProduct( this.props.id );
  },

  render: function() {
    const price = web3.fromWei( this.props.product.price, "ether" );
    const usdPrice = ( this.props.ethPrice * price ).toFixed( 2 );

    return React.createElement( "a", {
      href: "#",
      className: "card border-0 rounded-0 d-inline-block",
      style: { width: "400px" },
      onClick: this.renderProduct
    },
      React.createElement( "div", { className: "bountium-sale badge badge-primary p-2" }, "Sale" ),
      // React.createElement("div", {className:"card", onClick:this.renderProduct},
        React.createElement( "img", { className: "card-img-top rounded-0", alt: this.props.product.name, src: this.props.product.imageUrl } ),
        React.createElement( "div", { className: "card-body px-0 pb-0" },
          // TODO can we make the product name appear as a link w/o really being a link?
          React.createElement( "h4", { className: "card-title" }, this.props.product.name ),
          React.createElement( "p", { className: "card-text mb-2" }, this.props.product.description ),
          React.createElement( "dl", { className: "card-text" },
            React.createElement( "dt", { className: "sr-only" }, "Price" ),
            React.createElement( "dd", { className: "pb-0" },
              `${price} ETH (`,
              React.createElement( "b", {}, `${usdPrice} USD` ),
              ")"
            ) // dd
          ) // dl
        ) // div.card-body
    );
  }

} );
