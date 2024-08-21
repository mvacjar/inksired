export function CalcDiscount(price, discount) {
  if (!discount) return price;

  const discountAmount = (price * discount) / 100;
  const discountedPrice = price - discountAmount;
  return discountedPrice;
}
