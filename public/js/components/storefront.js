// TODO add more details to display in customer view of store:
  // info about how it is being assured for delivery (ie, guarantees)
  // info about store - their history, reviews, etc

var StoreFront = React.createClass({

  getInitialState : function() {
    var bizName_ = "anonymous business";
    this.props.autobiz.biz_name(function(err, res) {
      if (res!="")
        bizName_ = res;
    });
    var orderReceived = this.props.autobiz.OrderReceived((err, res) => {
      if (err)
        console.error(err)
      if (typeof res.args.productID !== 'undefined')
        alert("Success! Your order has been confirmed for product with ID: " + res.args.productID + " with orderID " + res.args.orderID + ". Save these somewhere in order to check your order's status later.");
    });
    var catalogue = [];
    // upper lim on how many products to fetch
    var maxProducts = 100;
    for (let i = 0; i < maxProducts; i++) {
      this.props.autobiz.catalogue(i, (err, res) => {
        if (err) {
          if(err.message.includes("not a base 16")) {
            return {
              expanded : false,
              catalogue : catalogue,
              bizName : bizName_
            }
          } else {
            console.error(err)
          }
        } else {
          // Assumes no one is intentionally naming a product ""
          if (res[0] != "") {
            if (res[3])
              catalogue.push({
                name : res[0],
                description : res[1],
                imageUrl : res[2],
                forSale : res[3],
                price : res[4],
                ordersReceived : res[5],
                supplyChainLength : res[6]
              });
          } else {
            return {
              expanded : false,
              catalogue : catalogue,
              bizName : bizName_
            }
          }
        }
      });
    }
    return {
      expanded : false,
      catalogue : catalogue,
      bizName : bizName_
    }
  },

  expand : function() {
    this.setState({expanded:true});
  },

  collapse : function() {
    this.setState({expanded:false});
  },

  mapProducts : function(product, key) {
    return React.createElement(Product,
      {product:product, key:key, autobiz:this.props.autobiz, id:key});
  },

  lookupOrder : function() {
    this.props.autobiz.checkOrderStatus(
      document.getElementById("product-id-input").value,
      document.getElementById("order-id-input").value,
      (err, res) => {
        if (err)
          console.error(err)
        else
          // TODO way to let owner make note of progress? or have autobiz auto-mark
          // steps in the supply chain as completed, so we can say "3/5 steps done"
          // or "in delivery" for example?
          this.props.autobiz.catalogue(document.getElementById("product-id-input").value,
            function(err1, res1) {
              if (err1)
                console.error(err1);
              else {
                if (res1[6] == res)
                  alert("Your order has been completed");
                else if (res1[6] == res + 1)
                  alert("Your order is manufactured, and being delivered to you!");
                else
                  alert(res + " out of " + res1[6] + " steps have been finished in completing your order");
              }
            }
          );
      }
    );
  },

  render : function() {
    var catalogueList = React.createElement("p", {}, "This business has not listed any products for sale!");
    var orderChecker = React.createElement("div", {className:"order-checker"},
      React.createElement("h4", {}, "Check an order's status"),
      React.createElement("label", {for:"product-id-input"}, "Input the product and order id"),
      React.createElement("br", {}),
      React.createElement("input", {type:"number", id:"product-id-input"}),
      React.createElement("br", {}),
      React.createElement("input", {type:"number", id:"order-id-input"}),
      React.createElement("br", {}),
      React.createElement("button", {onClick:this.lookupOrder}, "Lookup")
    );
    if (this.state.catalogue.length >= 0)
      catalogueList = this.state.catalogue.map(this.mapProducts);
    var storeHeader = React.createElement("div", {className:"store-header"},
      React.createElement("h3", null, "Welcome to the store of: " + this.state.bizName),
      orderChecker
    );
    if (this.state.expanded)
      return React.createElement("div", {className:"store-overview"},
        storeHeader, React.createElement("br", {}),
        React.createElement("div", {className:"catalogue-feed-customer"},
          React.createElement("h3", null, "Products Available"),
          React.createElement("button", {className:"toggle-expand-collapse", onClick:this.collapse}, "-"),
          catalogueList
        )
      );
    return React.createElement("div", {className:"store-overview"},
      storeHeader, React.createElement("br", {}),
      React.createElement("div", {className:"catalogue-feed-customer"},
        React.createElement("h3", null, "Products Available"),
        React.createElement("button", {className:"toggle-expand-collapse", onClick:this.expand}, "+")
      )
    );
  }

});
