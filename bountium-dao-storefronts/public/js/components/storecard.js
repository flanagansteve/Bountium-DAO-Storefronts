var StoreCard = React.createClass( {

  renderStore: function() {
    this.props.renderStore( this.props.id );
  },

  render: function() {
    // const price = web3.fromWei( this.props.store.price, "ether" );
    // const usdPrice = ( this.props.ethPrice * price ).toFixed( 2 );

    return React.createElement( "a", {
      href: "#",
      className: "card card--store border-0 rounded-0 d-inline-block",
      onClick: this.renderStore
    },
      // React.createElement( "div", { className: "bountium-sale badge badge-primary p-2" }, "Sale" ),
      // React.createElement("div", {className:"card", onClick:this.renderStore},
        React.createElement( "img", { className: "card-img-top rounded-0", alt: this.props.store.name, src: this.props.store.imageUrl } ),
        React.createElement( "div", { className: "card-body px-0 pb-0" },
          // TODO can we make the product name appear as a link w/o really being a link?
          React.createElement( "h4", { className: "card-title" }, this.props.store.name ),
          React.createElement( "p", { className: "card-text mb-2" }, this.props.store.description ),
          // React.createElement( "dl", { className: "card-text" },
          //   React.createElement( "dt", { className: "sr-only" }, "Price" ),
          //   React.createElement( "dd", { className: "pb-0" },
          //     `${price} ETH (`,
          //     React.createElement( "b", {}, `${usdPrice} USD` ),
          //     ")"
          //   ) // dd
          // ) // dl
        ) // div.card-body
    );
  }

} );
