const arr = ["a", "y", "i", "e", "o", "u", "w"];
const checkName = (name) => {
  if (typeof name !== "string") {
    return "Please Give The Name in letter";
  } else {
    for (let x of arr) {
      if (name[name.length - 1] == x) {
        return "Good Name";
      }
    }
  }

  return "Bad Name";
};
const output = checkName(9);
console.log(output);
