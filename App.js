const array = [2, 7, 9, 5];
// const arr = array.sort((a, b) => a - b); //sorting in ascending order
// const arrLength = arr.length; //get length of array
// console.log(arrLength);
// const newArr = array

//enter new value in last of array use push()
// const newArr = array.push(10); // push will return new array length which if form
// console.log(newArr);

// array.push(4);
// console.log(array); //to get all values of updated array
// console.log(array.length);
// console.log(array.at(-1));
// console.log(array.length - 2);
// console.log(array[array.length - 1]);

//to remove value from last of array use pop()
// const arrNew = array.pop();
// console.log(arrNew); //pop will return the value that is pop out

// array.pop();
// console.log(array); //to get all the values of updated array
// console.log(array.length); //to get length of the updated array

// its smiliar like pop() difference is it's to remove value from start of array use shift()
// const newArr = array.shift(); // returns element/value which is remove
// console.log(newArr);
// console.log(array); // to get the updated array

//similar to push() difference is it will add value in starting of array
// const newArr = array.unshift(7); //returns length of updated array
// console.log(newArr);
// console.log(array); // to get the updated array

// const arrvalue = arr[arrLength - 1]; // using []  to get value of last index of array
// const arrvalue = arr.at(-1); //using at() method to get value of last index of array
// const arrv= arr[0]
// console.log(arrvalue);

// Array.prototype.max = function () {
//   return Math.max.apply(null, this);
// };
// console.log(`Max value is: ${arr.max()}`);

// const maxValue = arr.reduce((a, b) => {
//   return Math.max(a, b);
// });
// console.log(maxValue);

// function arrValue() {
//   let max = arr[0];
//   for (let i = 1; i < arrLength; i++) {
//     if (max == arr.at(i) && max < arr.at(i)) {
//       return arr[i + 1];
//     } else {
//       console.log(max);
//     }
//   }
// }
// arrValue();

// Hoisting
// first undefined(for var x) then print str

// console.log(x);
// y();

// function y() {
//   console.log("str");
// }
// var x = 10;

// typeof
// console.log(typeof array);
// typeof "John"                 // Returns "string"
// typeof 3.14                   // Returns "number"
// typeof NaN                    // Returns "number"
// typeof false                  // Returns "boolean"
// typeof [1,2,3,4]              // Returns "object"
// typeof {name:'John', age:34}  // Returns "object"
// typeof new Date()             // Returns "object"
// typeof function () {}         // Returns "function"
// typeof myCar                  // Returns "undefined" *
// typeof null                   // Returns "object"

// Array- length
// const array = ["a", "b", "payal", "Gajwar"] string array

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function isLength(array) {
//   const arrayLength = array.length;
//   return arrayLength;
// }

// console.log(isLength(array));

// array - toString() method is to convert array into comma separated string, he toString() method is used internally by JavaScript when an object needs to be displayed as a text (like in HTML), or when an object needs to be used as a string. Normally, you will not use it in your own code.

// const array = ["Banana", "Orange", "Apple", "Mango"];
// function isString() {
//   const string = array.toString();
//   console.log(string);
// }
// isString();
// console.log(array);

// array - at(); and [] both method is to print value of any array's index
//  Mostly [] is used for accessing both arrays and objects.
// at() allows negative bracket indexing like [-1] to access elements from the end of an object / array / string.

// const array = [1, 6, 8];
// console.log(array.at(1));
// console.log(array.at(-2));
// // or;
// console.log(array[0]);

// const array = [2, 6, 8, 0, 4, 9];

// function secondLargest() {
//   const arr = array.sort();
//   console.log(arr.at(-2));
// }

// secondLargest();

// const array = [2, 6, 8, 0, 9, 9];

// function secondLargest() {
//   const arr = array.sort((a, b) => b - a); // descending
//   //   or
//   //   const arr = array.sort((x, y) => x - y); //ascending
//   const max = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr.at(i) == max) {
//       return arr.at(i + 1);
//     } else {

//       return arr.at(i);
//     }
//   }
// }
//   for (let i = 1; i <= n.length; i++) {
//     if (max == n[i]) {
//       return n[i + 1];
//     } else {
//       return n[1];
//     }
//   }
//   const arr = array.sort((x, y) => x - y); //ascending
//   const max = arr[arr.length - 1];

//   for (let i = -2; i < arr.length; i++) {
//     if (arr.at(i) == max) {
//       return arr.at(i - 1);
//     } else {
//       return arr.at(i);
//     }
//   }
// }

// console.log(arr[i]); not work proper

// console.log(secondLargest());

// Hoisting - variables

// var - output undefined
// console.log(x);
// var x = 10;

// let - inintializer error
// console.log(x);
// let x = 10;

// const - inintializer error
// console.log(x);
// const x = 10;

// value reassigning

// var- no error
// var x = 10;
// var x = 1;
// console.log(x);

// let -no error
// let x = 10;
// let x = 1;
// console.log(x);

// const - assignment error
// const x = 10;
// const x = 1;
// or
// const x;
// x = 1;
// console.log(x);

// Hoisting

// console.log(x); //undefined
// y(); // i

// var x =10;
// function y(){
//     console.log("i");
// }
