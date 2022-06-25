//Test Cases:
//1. [2, 4, 1, 0, 2, -1] should return the array [-1, 4]
//2. [20, 50, 12, 6, 14, 8] should return the array [6, 50]
//3. [100, -100] should return the array [-100, 100]

const array = [20, 50, 12, 6, 14, 8];

//console.log(array.length);

let max = array[0];
let min = array[0];

for (let i = 0; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}

for (let i = 0; i < array.length; i++) {
  if (array[i] < min) {
    min = array[i];
  }
}

let newArr = [min, max];

console.log(newArr);
