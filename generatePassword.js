const Korim = { name: "korimuddin", birthYear: 1999, siteName: "google" };
const password = (receive) => {
  if (!receive.name || !receive.birthYear || !receive.siteName) {
    console.error("Error: Missing required properties");
    return "Invalid user Data";
  }
  if (typeof receive.name !== "string") {
    console.error("Error: Name must be a string");
  }
  if (
    typeof receive.birthYear !== "number" ||
    isNaN(receive.birthYear) ||
    String(receive.birthYear).length !== 4
  ) {
    console.error("Error: Birth year must be a number and 4 digit");
  }
  if (typeof receive.siteName !== "string") {
    console.error("Error: Site name must be a string");
  } else {
    return `${
      receive.siteName.charAt(0).toUpperCase() + receive.siteName.slice(1)
    }#${receive.name}@${receive.birthYear}`;
  }
};
const target = password(Korim);
console.log(target);
