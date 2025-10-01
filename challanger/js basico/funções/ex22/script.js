// The tax rate is 8%.
const priceA = 100;
const priceB = 250;
const priceC = 70;

//Refactor so the math is not repeated
const totalA = priceA + priceA * 0.08;
const totalB = priceB + priceB * 0.08;
const totalC = priceC + priceC * 0.08;

console.log(totalA);
console.log(totalB);
console.log(totalC);



/*
function calcTotal(price) {
  return price + price * 0.08;
}
const totalA = calcTotal(priceA);
const totalB = calcTotal(priceB);
const totalC = calcTotal(priceC);
*/