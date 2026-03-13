const coupons = {
  'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
  'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
  'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000 }
};

export function validateCoupon(code, cartTotal) {

  const coupon = coupons[code];

  if (!coupon) {
    return { valid: false, message: "Invalid coupon" };
  }

  if (cartTotal < coupon.minAmount) {
    return { valid: false, message: "Minimum amount not reached" };
  }

  return { valid: true, message: "Coupon applied" };
}

export function calculateDiscount(code, cartTotal) {

  const coupon = coupons[code];

  if (coupon.type === 'percentage') {
    return (cartTotal * coupon.value) / 100;
  }

  return coupon.value;
}

export function applyDiscount(cartTotal, code) {

  const validation = validateCoupon(code, cartTotal);

  if (!validation.valid) {
    return {
      originalTotal: cartTotal,
      discount: 0,
      finalTotal: cartTotal,
      message: validation.message
    };
  }

  const discount = calculateDiscount(code, cartTotal);

  return {
    originalTotal: cartTotal,
    discount,
    finalTotal: cartTotal - discount,
    message: "Discount applied"
  };
}