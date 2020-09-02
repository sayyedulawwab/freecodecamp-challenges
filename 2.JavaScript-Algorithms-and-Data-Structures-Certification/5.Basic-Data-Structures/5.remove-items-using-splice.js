const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(1, 4);
// Only change code above this line
console.log(arr);
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);
