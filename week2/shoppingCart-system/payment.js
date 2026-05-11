 // iv. payment.js - Payment processing
                          import { reduceStock } from './product.js';
                          import { getCartItems, getCartTotal, clearCart } from './cart.js';
                          import { applyDiscount } from './discount.js';
                          
                          // TODO: Implement these functions
                          
                          export function processPayment(paymentMethod, couponCode = null) {
                            // 1. Get cart items and total
                            const cartItems = getCartItems();
                            const cartTotal = getCartTotal(); 

                            // 2. Apply discount if coupon provided
                            let discountDetails = null;
                            if (couponCode) {
                              discountDetails = applyDiscount(cartTotal, couponCode, cartItems);
                              if (discountDetails.message !== "Discount applied successfully") {
                                return { status: 'failed', message: discountDetails.message };
                              }
                            } 

                            // 3. Validate payment method (card/upi/cod)
                            if (!validatePaymentMethod(paymentMethod)) {
                              return { status: 'failed', message: "Invalid payment method" };
                            } 

                            // 4. Process payment (simulate)
                              // For simulation, we'll assume payment is always successful   
                              const paymentSuccess = true; // Simulate payment success
                              if (!paymentSuccess) {
                                return { status: 'failed', message: "Payment processing failed" };
                              }

                            // 5. Reduce stock for all items
                            cartItems.forEach(item => {
                              reduceStock(item.productId, item.quantity);
                            }); 

                            // 6. Clear cart
                            clearCart();

                            // 7. Generate order summary
                            // Return order summary:
                            // {
                            //   orderId: ...,
                            //   items: [...],
                            //   subtotal: ...,
                            //   discount: ...,
                            //   total: ...,
                            //   paymentMethod: ...,
                            //   status: 'success/failed',
                            //   message: '...'
                            // }
                            const orderId = generateOrderId();
                              const orderSummary = {      
                                orderId: orderId,
                                items: cartItems,
                                subtotal: cartTotal,  
                                discount: discountDetails ? discountDetails.discount : 0,
                                total: discountDetails ? discountDetails.finalTotal : cartTotal,
                                paymentMethod: paymentMethod,
                                status: 'success',
                                message: "Order placed successfully"
                              };
                            
                            
                          }
                          
                          export function validatePaymentMethod(method) {
                            // Check if method is valid (card/upi/cod)
                          }
                          
                          function generateOrderId() {
                            // Generate random order ID
                            return 'ORD' + Date.now();
                          }


