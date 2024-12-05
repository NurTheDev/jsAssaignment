const arr = [NaN, 1, 12, 0, -1, undefined];
const test1 = [1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }];
const test3 = ["1", { num: 2 }, NaN];
const test4 = { num: [1, 2, 3] };
const deleteInvalids = (receive) => {
  let numberArray = [];
  if (Array.isArray(receive)) {
    for (let x of receive) {
      if (typeof x === "number" && !isNaN(x)) {
        numberArray.push(x);
      }
    }
  } else {
    return "Please give an array";
  }
  return numberArray;
};
const target = deleteInvalids(test1);
console.log(target);
