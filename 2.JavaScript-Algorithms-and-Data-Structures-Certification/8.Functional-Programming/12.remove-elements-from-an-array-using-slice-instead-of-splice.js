function nonMutatingSplice(cities) {
  // Only change code below this line
  return cities.slice(0, 3);

  // Only change code above this line
}
let inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];

console.log(inputCities);
console.log(nonMutatingSplice(inputCities));
console.log(inputCities);
