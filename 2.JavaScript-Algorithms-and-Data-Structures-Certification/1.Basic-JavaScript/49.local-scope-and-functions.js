function myLocalScope() {
  "use strict";
  // Only change code below this line
  var myVar = 5;
  console.log("inside myLocalScope", myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log("outside myLocalScope", myVar);