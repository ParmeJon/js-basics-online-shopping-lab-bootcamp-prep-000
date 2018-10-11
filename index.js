var cart = [];
var price = Math.floor(Math.random() * 100) + 1;

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var items = {itemName:item};
 var price = Math.floor(Math.random() * 100) + 1;
 var prices = {itemPrice:price};
 const totalItem = Object.assign(items, prices);
 cart.push(totalItem);
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else var sentenceFinish = []; { 
    for (var i = 0; i < cart.length; i++) {
    for (var key in cart[i]){
      sentenceFinish.push(`${cart[i][key]}`);
    }
   }
   var joinedSentence = `${sentenceFinish.join(' at $')}`;
   return `In your cart, you have ${joinedSentence}.`
  }
  }

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
