const ticketPrice = 120;
const guard = 500;
const meal = 50;
const calculateMoney = (ticket) => {
  total = ticket * ticketPrice - guard - meal * 8;
  if (total > 0) {
    return total;
  } else {
    return "You don't get any revenue today ";
  }
};
console.log(calculateMoney(10));
