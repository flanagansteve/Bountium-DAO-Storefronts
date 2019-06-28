// TODO add more details to display in customer view of store:
  // info about how it is being assured for delivery (ie, guarantees)
  // info about store - their history, reviews, etc

// A constant for the amount of queries we want to do from the contract at a time
const productsPerFetch = 10;

var StoreFront = React.createClass({

  getInitialState : function() {
    var orderReceived = this.props.autobiz.OrderReceived((err, res) => {
      if (err)
        console.error(err)
      if (typeof res.args.productID !== 'undefined')
        alert("Success! Your order has been confirmed for product with ID: " + res.args.productID + " with orderID " + res.args.orderID + ". Save these somewhere in order to check your order's status later.");
    });
    // upper lim on how many products to fetch from the biz
    // TODO is there some way to actually ask the contract "how many products do
    // you sell?" If not, there should be
    var productsStillToFetch = 100;
    return {
      catalogue : [],
      bizName : "anonymous business",
      productsStillToFetch : productsStillToFetch,
      noMore : false,
      selectedProduct : -1
    }
  },

  componentDidMount : function() {
    this.fetchProducts();
    this.props.autobiz.biz_name((err, res) => {
      if (res!="")
        this.setState({bizName : res});
    });
  },

  renderProduct : function(productID) {
    this.setState({selectedProduct : productID})
  },

  unrenderProduct : function() {
    this.setState({selectedProduct : -1})
  },

  getProduct : function(productNum) {
    var catalogue = this.state.catalogue;
    this.props.autobiz.catalogue(productNum, (err, res) => {
      if (err) {
        if(err.message.includes("not a base 16")) {
          this.setState({noMore:true})
        } else {
          console.error(err)
        }
      } else {
        // Assumes no one is intentionally naming a product ""
        if (res[0] != "") {
          if (res[3]) {
            catalogue.push({
              name : res[0],
              description : res[1],
              imageUrl : res[2],
              forSale : res[3],
              price : res[4],
              ordersReceived : res[5],
              supplyChainLength : res[6],
              orderOptions : res[7]
            });
            this.setState({catalogue:catalogue});
          }
        }
      }
    });
  },

  fetchProducts : function() {
    var i = 0;
    for (i; i < productsPerFetch; i++) {
      if (this.state.productsStillToFetch - i - 1 < 0) {
        break;
      }
      this.getProduct(this.state.catalogue.length + i);
    }
    this.setState({productsStillToFetch:this.state.productsStillToFetch -= i})
  },

  mapProducts : function(product, key) {
    return React.createElement(ProductCard,
      {product:product, key:key, autobiz:this.props.autobiz, id:key, renderProduct:this.renderProduct}
    );
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
    var headerText = React.createElement("h3", {onClick:this.undisplayBounty}, "Welcome to a ", React.createElement("a", {href:"#"}, "Custom Market"));
    var storeHeader = React.createElement("div", {className:"row"},
      React.createElement("h3", {onClick:this.unrenderProduct, className:"col-9"}, "Welcome to the store of: ", React.createElement("a", {href:"#"}, this.state.bizName)),
      React.createElement("button", {onClick:this.unrenderProduct, className:"btn btn-info col-2"}, "Back")
    );
    // TODO have a link that renders the: React.createElement(OrderChecker, {})
    if (this.state.catalogue.length == 0)
      return React.createElement("div", {className:"container-fluid"},
        storeHeader,
        React.createElement("div", {className:"container row"},
          React.createElement("div", {className:"col-12"},
            React.createElement("div", {className:"mt-3"},
              (!this.state.noMore && React.createElement("img", {className:"img-sm", src:"/img/loading.gif"})),
              (this.state.noMore && React.createElement("p", {}, "This business has no products available"))
            )
          )
        )
      );
    if (this.state.selectedProduct >= 0)
      return React.createElement("div", {className:"container-fluid"},
        storeHeader,
        React.createElement("div", {className:"mt-3"},
          React.createElement(ProductDisplay,
            {
              product:this.state.catalogue[this.state.selectedProduct],
              autobiz:this.props.autobiz,
              id:this.state.selectedProduct
            }
          )
        )
      );
    return React.createElement("div", {className:"container-fluid mb-2"},
      storeHeader,
      React.createElement("div", {className:"col-12 mt-3 card-columns"},
        this.state.catalogue.map(this.mapProducts)
      )
    );
  }

});
