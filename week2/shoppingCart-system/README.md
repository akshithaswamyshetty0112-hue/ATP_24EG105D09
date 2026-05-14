# Shopping Cart System

This folder contains a modular e-commerce shopping cart system written in JavaScript.

## Files

### app.js
Main application file that connects all modules and demonstrates the full shopping flow:
- Browse products
- Search products
- Add products to cart
- View cart items and total
- Update item quantities
- Remove items from cart
- Checkout with a payment method and coupon

### product.js
Product catalog module.

It includes functions for:
- Getting all products
- Getting a product by ID
- Filtering products by category
- Searching products by name
- Checking stock availability
- Reducing stock after purchase

### cart.js
Shopping cart operations module.

It includes functions for:
- Adding products to cart
- Removing products from cart
- Updating product quantity
- Getting cart items
- Calculating cart total
- Clearing the cart

### discount.js
Coupon and discount logic module.

It includes functions for:
- Validating coupon codes
- Checking minimum purchase amount
- Checking category-based coupons
- Calculating discount amount
- Applying discount to the cart total

### payment.js
Payment processing module.

It includes functions for:
- Getting cart total
- Applying discounts
- Validating payment method
- Simulating payment
- Reducing product stock
- Clearing the cart after checkout
- Generating an order ID

## How to Run

Use Node.js from this folder:

node app.js


If ES module imports are not enabled, add a `package.json` file with:

json
{
  "type": "module"
}

