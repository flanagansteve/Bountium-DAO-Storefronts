var ProductDisplay = React.createClass( {

  getInitialState: function() {
    return {
      orderButtonMessage: ""
    }
  }, 
  componentDidMount: function(){

  },
  order: function( productID ) {

    var customOptions = {};
    if ( ( this.props.product.orderOptions !== undefined && this.props.product.orderOptions.length > 0 ) )
      Object.keys( JSON.parse( this.props.product.orderOptions ) ).map( ( key ) =>
        customOptions[key] = document.getElementById( key ).value
      )
    // Add delivery info:
    customOptions["Delivery Info"] = document.getElementById( "customer-info-input-" + productID ).value;
    customOptions["Size"] = document.querySelector( 'input[name="size"]:checked' ).value

    this.props.autobiz.order( productID,
      JSON.stringify( customOptions ),
      { from: userAccount, value: this.props.product.price },
      function( err, res ) {
        if ( err ) {
          console.error( err )
        } else {
          // TODO why don't this run on tx confirm :(((
          alert( "Your order has been sent and is awaiting confirmation" );
        }
      }
    );
  },

  // options are added in this format in remix:
  // [product index], "{\"option_name\":[\"option1\",\"option2\",\"etc\"]}"
  // ie: 0, "{\"sizes\":[\"small\",\"medium\",\"large\"]}"
  // we'll use JSON.stringify in the DAO mgr to make this user friendly in time,
  // but leaving this here now as you test
  optionSetRadioForms: function( key, keynum ) {
    return React.createElement( "div", { key: keynum },
      React.createElement( "h5", {}, "Select your " + key ),
      React.createElement( "select", { className: "form-control", id: key },
        JSON.parse( this.props.product.orderOptions )[key].map( ( option, key ) =>
          React.createElement( "option", { value: option, key: key }, option )
        )
      )
    )
  },

  render: function() {
    const price = web3.fromWei( this.props.product.price, "ether" );
    const usdPrice = ( this.props.ethPrice * price ).toFixed( 2 );

    const sizes = JSON.parse(this.props.product.orderOptions).sizes;

    const sizeSelectors = sizes.map( function generateSizeSelectors( size ) {
      const sizeAbbreviation = size.slice( 0,1 );
      const sizeId = `size-${sizeAbbreviation.toLowerCase()}`;

      return React.createElement( "div", { className: "custom-control custom-radio custom-control-inline" },
        React.createElement( "input", {
          id: sizeId,
          className: "custom-control-input",
          name: "size",
          type: "radio",
          value: size
        } ),
        React.createElement( "label", { className: "custom-control-label", htmlFor: sizeId },
          size
        )
      )
    } );

    return (
      // Wrapper:
      React.createElement( "div", { className: "row" },
        // Image Column:
        React.createElement( "div", { className: "col-12 mb-3 mb-md-0 col-md-6" },
          // Product Card:
          React.createElement( "div", { className: "card border-0 rounded-0 d-inline-block" },
            // Sale Badge:
            React.createElement( "div", { className: "bountium-sale badge badge-primary p-2" }, "Sale" ),
            // Product Image:
            React.createElement( "img", {
              className: "card-img-top rounded-0",
              alt: this.props.product.name,
              src: this.props.product.imageUrl
            } )
          )
        ),
        // Product Details Column:
        React.createElement( "div", { className: "col-12 col-md-6" },
          React.createElement( "h2", {}, this.props.product.name ),
          //  p.lead would go here if used
          React.createElement( "p", {}, this.props.product.description ),

          // Price:
          React.createElement( "dl", { className: "card-text" },
            React.createElement( "dt", { className: "sr-only" }, "Price" ),
            React.createElement( "dd", { className: "pb-0" },
              `${price} ETH (`,
              React.createElement( "b", {}, `${usdPrice} USD` ),
              ")"
            ) // dd
          ), // dl

          React.createElement( "div", {}, 
            /*
            <div class="custom-control custom-radio custom-control-inline">
              <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input">
              <label class="custom-control-label" for="customRadioInline1">Toggle this custom radio</label>
            </div>
            <div class="custom-control custom-radio custom-control-inline">
              <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input">
              <label class="custom-control-label" for="customRadioInline2">Or toggle this other custom radio</label>
            </div>
            */
            React.createElement( "fieldset", { className: "form-group" },
              React.createElement( "legend", { className: "col-form-label" }, "Size" ),
              sizeSelectors
            ),

            React.createElement( "div", { className: "form-group" },
              React.createElement( "label", {
                htmlFor: "customer-info-input-" + this.props.id
              },
                "Email Address"
                // "Shipping Address"
              ),

              // Email Address:
              React.createElement( "input", {
                type: "email",
                id: "customer-info-input-" + this.props.id,
                className: "form-control",
                placeholder: "you@example.com",
                ariaDescribedby: "delivery-information-help"
              } ),
              React.createElement( "p", {
                id: "delivery-information-help",
                className: "form-text text-muted"
              },
                "Your download link will be sent to this address."
              ),

              // Mailing Address:
              // React.createElement( "textarea", {
              //   id: "customer-info-input-" + this.props.id,
              //   className: "form-control",
              //   placeholder: "123 Fake St, Anytown, USA",
              // } ),
            ),

            React.createElement( "button", {
              className: "btn btn-primary mb-1",
              onClick: () => {
                if ( window.metamaskAvailable ) {
                  this.order( this.props.id ) 
                } else {
                  window.location = "https://metamask.io/"
                }
              }
            },
              window.metamaskAvailable ? "Order" : "Install Metamask to Order"
            )
          ) // div
        ) // /Product Details Column 
      ) // /"Wrapper"
    ); // return
  }

} );
