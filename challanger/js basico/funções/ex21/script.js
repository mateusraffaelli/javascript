const originalA = 40; // Product A
const originalB = 120; // Product B
const originalC = 200; // Product C
const discountPercent = 25; // discount in %
 
function applyDiscount(price) {
  return price - (price * discountPercent / 100);
}

// TODO: Refactor the code to use applyDiscount()
const priceA = originalA - (originalA * discountPercent / 100);
const priceB = originalB - (originalB * discountPercent / 100);
const priceC = originalC - (originalC * discountPercent / 100);

console.log(priceA); // expected: 30
console.log(priceB); // expected: 90
console.log(priceC); // expected: 150








/*
const originalA = 40; // Product A
const originalB = 120; // Product B
const originalC = 200; // Product C
const discountPercent = 25; // discount in %
 
function applyDiscount(price) {
  return price - (price * discountPercent / 100);
}
 
const priceA = applyDiscount(originalA);
const priceB = applyDiscount(originalB);
const priceC = applyDiscount(originalC);
*/