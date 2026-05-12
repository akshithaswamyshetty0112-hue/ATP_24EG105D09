//ii. cart.js - Shopping cart operations
                          import { getProductById, checkStock } from './product.js';
                          
                          let cartItems = [];
                          
                          // TODO: Implement these functions
                          
                          export function addToCart(productId, quantity) {
                            // 1. Get product details
                              const product = getProductById(productId);  
                              if(!product){
                                return "Product not found"
                              }    } 
                            // 2. Check stock availability
                              if(checkStock(productId,quantity)){
                                return "Product added to cart"
                              }else{
                                return "Insufficient stock"
                              } 

                            // 3. Check if product already in cart
                            //    - If yes, update quantity
                            //    - If no, add new item
                                    if(cartItems.find((cObj)=>cObj.productId===productId)){
                                        cartItems.map((cObj)=>{
                                            if(cObj.productId===productId){
                                                cObj.quantity+=quantity
                                            }
                                       })
                                    }else{
                                        cartItems.push({productId,quantity})
                                    }
                            // 4. Return success/error message
                            return "Product added to cart"  
                                  
                          
                          export function removeFromCart(productId) {
                            // Remove product from cart
                            cartItems = cartItems.filter((cObj)=>cObj.productId!==productId)
                            return "Product removed from cart"
                          }
                          
                          export function updateQuantity(productId, newQuantity) {
                            // Update quantity of product in cart
                            cartItems.map((cObj)=>{
                                if(cObj.productId===productId){
                                    if(checkStock(productId,newQuantity)){
                                        cObj.quantity=newQuantity
                                        return "Quantity updated"
                                    }else{
                                        return "Insufficient stock"
                                    }
                                }                    
                              })     
                            }
                            // Check stock before updating\
                            if(checkStock(productId,newQuantity)){
                                cartItems.map((cObj)=>{
                                    if(cObj.productId===productId){
                                        cObj.quantity=newQuantity
                                    }
                                })      
                          }
                          
                          export function getCartItems() {
                            // Return all cart items with product details
                            return cartItems.map((cObj)=>{
                                const product = getProductById(cObj.productId)
                                return {
                                    ...product,
                                    quantity:cObj.quantity
                                }
                            }) 
                          }
                          
                          export function getCartTotal() {
                            // Calculate total price of all items in cart
                            // Return total
                            return cartItems.reduce((total, cObj) => {
                                const product = getProductById(cObj.productId)
                                return total + (product.price * cObj.quantity)
                            }, 0)
                          }
                          
                          export function clearCart() {
                            // Empty the cart
                            cartItems = []
                            return "Cart cleared"
                          }

