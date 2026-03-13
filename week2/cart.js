import { getProductById, checkStock } from './product.js';

let cartItems = [];

export function addToCart(productId, quantity) {

  const product = getProductById(productId);

  if (!product) return "Product not found";

  if (!checkStock(productId, quantity)) {
    return "Not enough stock";
  }

  const item = cartItems.find(i => i.productId === productId);

  if (item) {
    item.quantity += quantity;
  } else {
    cartItems.push({ productId, quantity });
  }

  return "Item added to cart";
}

export function removeFromCart(productId) {
  cartItems = cartItems.filter(i => i.productId !== productId);
  return "Item removed";
}

export function updateQuantity(productId, newQuantity) {

  if (!checkStock(productId, newQuantity)) {
    return "Not enough stock";
  }

  const item = cartItems.find(i => i.productId === productId);

  if (!item) return "Item not found";

  item.quantity = newQuantity;

  return "Quantity updated";
}

export function getCartItems() {
  return cartItems;
}

export function getCartTotal() {

  let total = 0;

  cartItems.forEach(item => {
    const product = getProductById(item.productId);
    total += product.price * item.quantity;
  });

  return total;
}

export function clearCart() {
  cartItems = [];
}