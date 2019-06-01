var autobizABI = web3.eth.contract([{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"owners","outputs":[{"name":"name","type":"string"},{"name":"stake","type":"uint256"},{"name":"callsDividend","type":"bool"},{"name":"canDilute","type":"bool"},{"name":"canBestow","type":"bool"},{"name":"canModifyCatalogue","type":"bool"},{"name":"board","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"product","type":"uint256"},{"name":"orderID","type":"uint256"}],"name":"checkOrderStatus","outputs":[{"name":"stepsCompleted","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"biz_name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"catalogue","outputs":[{"name":"name","type":"string"},{"name":"description","type":"string"},{"name":"imageURL","type":"string"},{"name":"forSale","type":"bool"},{"name":"price","type":"uint256"},{"name":"ordersReceived","type":"uint256"},{"name":"supplyChainLength","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"amt","type":"uint256"}],"name":"payDividend","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"supplyChains","outputs":[{"name":"description","type":"string"},{"name":"incentiviser","type":"address"},{"name":"fee","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"product","type":"uint256"},{"name":"evaluator","type":"address"},{"name":"fee","type":"uint256"}],"name":"addSupplyStep","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"product","type":"uint256"},{"name":"orderID","type":"uint256"}],"name":"paySuppliersForOrder","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalShares","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"equityTaken","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"bestowee","type":"address"},{"name":"which","type":"uint256"}],"name":"bestowPermission","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"sharesToTransfer","type":"uint256"},{"name":"recipient","type":"address"}],"name":"transferShares","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"b32","type":"bytes32"}],"name":"bytes32ToBytes","outputs":[{"name":"b","type":"bytes"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"product","type":"uint256"},{"name":"step","type":"uint256"}],"name":"paySupplier","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"shares","type":"uint256"},{"name":"recipient","type":"address"}],"name":"giveUnallocatedShares","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"product","type":"uint256"}],"name":"listProduct","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"x","type":"uint256"}],"name":"uintToBytes","outputs":[{"name":"b","type":"bytes"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"product","type":"uint256"},{"name":"newPrice","type":"uint256"}],"name":"changePrice","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"product","type":"uint256"},{"name":"description_","type":"string"}],"name":"addDescription","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"orders","outputs":[{"name":"complete","type":"bool"},{"name":"suppliersPaid","type":"bool"},{"name":"customerData","type":"string"},{"name":"stepsCompleted","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"price","type":"uint256"}],"name":"releaseProduct","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"product","type":"uint256"},{"name":"imageURL_","type":"string"}],"name":"addImageUrl","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"name_","type":"string"}],"name":"setMyName","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"product","type":"uint256"},{"name":"customerInfo","type":"string"}],"name":"order","outputs":[{"name":"orderPlaced","type":"bool"},{"name":"delivered","type":"address"},{"name":"orderID","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"ownersRegistered","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"source","type":"string"}],"name":"stringToBytes","outputs":[{"name":"result","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"stake","type":"uint256"},{"name":"recipient","type":"address"}],"name":"dilute","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"product","type":"uint256"}],"name":"delistProduct","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"equityToSender","type":"uint256"},{"name":"_totalShares","type":"uint256"},{"name":"_name","type":"string"}],"payable":true,"stateMutability":"payable","type":"constructor"},{"payable":false,"stateMutability":"nonpayable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"byWhom","type":"address"}],"name":"OwnershipModified","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"byWhom","type":"address"},{"indexed":false,"name":"productID","type":"uint256"}],"name":"ProductReleased","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"byWhom","type":"address"},{"indexed":false,"name":"productID","type":"uint256"}],"name":"ProductModified","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"productID","type":"uint256"},{"indexed":false,"name":"orderID","type":"uint256"}],"name":"OrderReceived","type":"event"}]);

autobiz = null;
userAccount = null;

function renderStore(autobizAddr) {
  autobiz = autobizABI.at(autobizAddr);
  document.getElementById("dashboard").innerHTML = "";
  ReactDOM.render(
    React.createElement(StoreFront, {customer:true, autobiz:autobiz}, userAccount),
    document.getElementById("dashboard")
  )
}

function updateInterface() {
  document.getElementById("workflow-container").innerHTML = "";
  var addr = location.search;
  if (addr.includes("0x")) {
    autobizAddr = addr.substring(addr.indexOf("0x"));
    // presuming its a valid autobiz addr... TODO
    autobiz = autobizABI.at(autobizAddr);
    renderStore();
  } else {
    ReactDOM.render(
      React.createElement(Welcome, {renderStore:renderStore}, userAccount),
      document.getElementById("dashboard")
    );
  }
}

window.addEventListener('load', async () => {

  document.getElementById("dashboard").innerHTML = "<h1>Bountium is a dapp built on the Ethereum blockchain. You need an Ethereum wallet to use it - we recommend metamask, which you can install <a href = \'https://metamask.io\'>here</a></h1>";

  // check for metamask
  if(typeof web3 !== 'undefined') {
    await ethereum.enable();
    web3 = new Web3(web3.currentProvider);
  } else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }
  try {
    userAccount = web3.eth.accounts[0];
    updateInterface();
    var accountInterval = setInterval(function() {
      if (web3.eth.accounts[0] !== userAccount) {
        userAccount = web3.eth.accounts[0];
        updateInterface();
      }
    }, 100);
  } catch (e) {
    console.error(e);
  }
});
