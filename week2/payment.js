import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

export function processPayment(method, couponCode = null) {

  const items = getCartItems();
  let subtotal = getCartTotal();

  let discountData = {
    discount: 0,
    finalTotal: subtotal
  };

  if (couponCode) {
    discountData = applyDiscount(subtotal, couponCode);
  }

  items.forEach(item => {
    reduceStock(item.productId, item.quantity);
  });

  clearCart();

  return {
    orderId: generateOrderId(),
    items,
    subtotal,
    discount: discountData.discount,
    total: discountData.finalTotal,
    paymentMethod: method,
    status: "success",
    message: "Order placed successfully"
  };
}

function generateOrderId() {
  return "ORD" + Date.now();
}