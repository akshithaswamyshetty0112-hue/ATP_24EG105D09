 //iii. discount.js - Coupon and discount logic
                          // Available coupons
                          const coupons = {
                            'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
                            'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
                            'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
                          };
                          
                          // TODO: Implement these functions
                          
                          export function validateCoupon(couponCode, cartTotal, cartItems) {
                            // 1. Check if coupon exists
                              if(!coupons[couponCode]){ 
                                return { valid: false, message: "Invalid coupon code" }
                              }

                            // 2. Check minimum amount requirement
                            if (cartTotal < coupons[couponCode].minAmount) {
                              return { valid: false, message: "Minimum purchase amount not met" }
                            }

                            // 3. Check category requirement (if any)
                            if (coupons[couponCode].category) {
                              const cartHasCategoryItem = cartItems.some((item) => {
                                const product = getProductById(item.productId);
                                return product.category === coupons[couponCode].category;
                              });
                              if (!cartHasCategoryItem) {
                                return { valid: false, message: "Coupon is not applicable to items in the cart" }
                              }
                            }

                            // Return { valid: true/false, message: '...' }
                            return { valid: true, message: "Coupon is valid" };
                          }
                          
                          export function calculateDiscount(couponCode, cartTotal) {
                            // Calculate discount amount based on coupon type
                            // Return discount amount
                            if(coupons[couponCode].type==='percentage'){
                                return (cartTotal*coupons[couponCode].value)/100
                            }else if(coupons[couponCode].type==='flat'){
                                return coupons[couponCode].value
                            }
                          }
                          
                          export function applyDiscount(cartTotal, couponCode, cartItems) {
                            // 1. Validate coupon
                            const validation = validateCoupon(couponCode, cartTotal, cartItems);
                            if (!validation.valid) {
                              return { 
                                originalTotal: cartTotal, 
                                discount: 0, 
                                finalTotal: cartTotal,
                                message: validation.message
                              }
                            }   

                            // 2. If valid, calculate discount
                            const discount = calculateDiscount(couponCode, cartTotal);
                            const finalTotal = cartTotal - discount;    
                              
                            // 3. Return final amount and discount details
                            // Return { 
                            //   originalTotal: ..., 
                            //   discount: ..., 
                            //   finalTotal: ...,
                            //   message: '...'
                            // }
                            return { 
                              originalTotal: cartTotal, 
                              discount: discount, 
                              finalTotal: finalTotal,
                              message: "Discount applied successfully"
                            };
                          }
