const arr = [1000, 3000, 2500];
const living = 5000;
monthlySavings = (salary) => {
  let vatAmount = 0;
  for (let x of salary) {
    if (x >= 3000) {
      vatAmount = x - x * 0.2;
    }
  }
  return vatAmount;
};
const savings = monthlySavings(arr);
console.log(savings);
