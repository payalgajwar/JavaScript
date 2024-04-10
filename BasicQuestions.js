//Sort method for numeric should be apply

// function removeDuplicateCharacters() {
//   var string = "priya riya supriya";
//   let result = string
//     .split("") // method splits a string into an array of substrings.
//     .filter((item, index, arr) => {
//       // method is used to create a new array with all elements that pass the test implemented by the provided callback function.
//       // item represents each individual element of the array arr
//       // Position of element in array
//       // Splitted array is arr
//       return arr.indexOf(item) === index; // so here position/index of first occurance of that element in array element will compare and return true if its equal to current element which is on iterating coming
//       // indexOf() method is used to find the index of the first occurrence of a specified value within an array or a string
//       // arr.indexOf(item)- returns the first index at which a given element can be found in the array.
//       // index- Position/index of current element in array
//     })
//     .join(""); // to join the output array back into a string
//   return result; //return joined filter string
// }
// console.log(removeDuplicateCharacters());++++++++++++++++--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Code 2: Remove Duplicate characters from array of element and find the count of an elements using set object
// var arr = [55, 44, 55, 67, 67, 67, 67, 8, 8, 8, 8, 8, 65, 1, 2, 3, 3, 34, 5];
// const value = [...new Set(arr)]; //new set method craete new array of subset, to take out values avoid value repetation
// console.log(value);
// console.log(value.length); //output- [
//     55, 44, 67,  8, 65,
//      1,  2,  3, 34,  5
//   ]
//   10

// Code 3: Remove Duplicate characters from array of element using filter
// const array = [1, 3, 5, 7, 4, 4, 3, 3, 5];
// const newArray = (array) => {
//   const filterArray = array.filter(
//     (ele, index, arr) => arr.indexOf(ele) === index
//   );
//   return filterArray;
// };
// console.log(newArray(array)); //output- [ 1, 3, 5, 7, 4 ]

// Code 4:String reverse without reversing of individual words (Array of elements can be reverse with reverse() method but for string it is won't possible so required to split
// and then join().

// const array = [1, 3, 5, 7, 4, 4, 3, 3, 5];

// const reverseArray = (str) => {
//   const newStr = str
//     .split("") // split-
//     .reverse()
//     .join("")
//     .split(" ")
//     .reverse()
//     .join(" ");
//   return newStr;
// };

// console.log(reverseArray("Hey there")); //output- yeH ereht

// Code 5:String reverse with reversing of individual words
// const reverseString = (str) => {
//   const revString = str.split("").reverse().join(" ");
//   return revString;
// };
// console.log(reverseString("Hey String"));

// Code 6:String reverse without using inbult function
const array = [1, 3, 5, 7, 4];
// const arr = [];
// for (let i = 0; i = array.length; i++) {
//   const newArray = array.pop(array.values(i));
//   console.log(newArray);
// }
const arr = array.reverse();
console.log(arr);
