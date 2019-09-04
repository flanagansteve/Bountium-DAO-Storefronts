/* global StoreCard */
var Welcome = React.createClass( {
  render: function() {
    // TODO: Retrieve from database
    const store = {
      id: '0x78d00bFCF110ddc32F0BF03e077ac8A58dC5e573',
      name: 'Bountium Store',
      description: 'The first work on a cryptographically secured chain of blocks was described in 1991 by Stuart Haber and W. Scott Stornetta.',
      imageUrl: '/img/social-share.png',
    };

    const stores = [
      { ...store, description: 'Get some official Bountium gear.' },
      { ...store, id: ( Math.random() * 100 ), name: 'Vendor Store', imageUrl: store.imageUrl.replace( '.png', '-red.png' ) },
      { ...store, id: ( Math.random() * 100 ), name: 'Vendor Store', imageUrl: store.imageUrl.replace( '.png', '-green.png' ) },
      { ...store, id: ( Math.random() * 100 ), name: 'Vendor Store', imageUrl: store.imageUrl.replace( '.png', '-orange.png' ) },
      { ...store, id: ( Math.random() * 100 ), name: 'Vendor Store', imageUrl: store.imageUrl.replace( '.png', '-pink.png' ) },
      { ...store, id: ( Math.random() * 100 ), name: 'Vendor Store', imageUrl: store.imageUrl.replace( '.png', '-teal.png' ) },
      { ...store, id: ( Math.random() * 100 ), name: 'Vendor Store', imageUrl: store.imageUrl.replace( '.png', '-purple.png' ) },
      { ...store, id: ( Math.random() * 100 ), name: 'Vendor Store', imageUrl: store.imageUrl.replace( '.png', '-black.png' ) },
    ];

    return React.createElement( "div", { className: "container" },
      React.createElement( "div", { className: "row" },
          React.createElement( "div", { className: "col-12" },

          React.createElement( "header", {},
            React.createElement( "h1", {}, "Welcome!" ),
            React.createElement( "p", { className: "lead" }, "Shop at a Bountium-powered business." ),
          ),

          // React.createElement( "p", {}, "Get some official Bountium gear through our store at address: ",
          //   React.createElement( "a", { href: "./?0x78d00bFCF110ddc32F0BF03e077ac8A58dC5e573" },
          //     "0x78d00bFCF110ddc32F0BF03e077ac8A58dC5e573"
          //   )
          // ),

          // React.createElement( "p", {}, "Example on the Ropsten network at: ",
          //   React.createElement( "a", { href: "./?0xefe00cbd5bf51bf8f3cf5804650fd8e3fd5e9ec2" },
          //     "0xefe00cbd5bf51bf8f3cf5804650fd8e3fd5e9ec2"
          //   )
          // ),

          React.createElement( "label",
            {
              htmlFor: "store-addr-input",
              className: "font-weight-bold"
            },
            "Look up a store by address:"
          ),
          React.createElement( "div", { className: "input-group mb-3", style: { maxWidth: "30rem" } },
            React.createElement( "input",
              {
                type: "text",
                className: "form-control",
                id: "store-addr-input",
                placeholder: "e.g. 0x78d00bFCF110ddc32F0BF03e077ac8A58dC5e573",
                ariaDescribedby: "store-addr-input-btn"
              }
            ),
            React.createElement( "div", { className: "input-group-append" },
              React.createElement( "button",
                {
                  id: "store-addr-input-btn",
                  className: "btn btn-primary",
                  onClick: () => {
                    this.props.renderStore( document.getElementById( "store-addr-input" ).value )
                  }
                },
                "Go!"
              ),
            )
          )
        ),
      ),
      React.createElement( "div", { className: "row" },
        React.createElement( "div", { className: "col-12" },
          React.createElement( "h2", {}, "Browse Stores" ),
          React.createElement( "div",
            {
              className: "d-flex",
              style: {
                flexWrap: "wrap",
                marginLeft: "-.5rem" ,
                marginRight: "-.5rem"
              }
            },
            stores.map( ( store ) => (
              React.createElement( StoreCard,
                {
                  key: store.id,
                  id: store.id,
                  store,
                  renderStore: this.props.renderStore
                }
              )
            ) )
          )
        )
      )
    ) // container
  }
} );
