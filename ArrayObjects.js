// combine to array
// function array(arr){
//     console.log(arr[0].values.concat(arr[2].values));
//   }

//   array([
//     {name:'a',values:[1,2]},
//     {name:'b',values:[3]},
//     {name:'a',values:[4,5]}
//   ]);

// output = [1, 2, 4, 5]

//   function array(arr){
//     const arrNew=0;
//     // console.log(arr[0].values.concat(arr[2].values));
//     for(let i = 0; i < arr.length; i++){
//         arrNew += arr[i].name;
//     }
//   }

//   function array(arr){
//     const arrNew=[];
//     for(let i = 0; i < arr.length; i++){
//       const arrayNew=  arrNew.concat(arr[i].name);
//       console.log(arrayNew)
//     }
//   }

//   output- [ 'a' ]
//   [ 'b' ]
//   [ 'a' ]

// let obj = [
//   { name: "a", values: [1, 2] },
//   { name: "b", values: [3] },
//   { name: "a", values: [4, 5] },
// ];
// const allValues = [];
// for (let i = 0; i < data.length; i++) {
//   //   const obj = data[i];
//   //   const values = obj.values;
//   const values = data[i].values;
//   console.log(values);
//   for (let j = 0; j < values.length; j++) {
//     allValues.push(values[j]);
//   }
// }
// console.log(allValues);

// or you can use map and reduce//
// const array = [];

// function x(array) {
//   const allValues = array.map((obj) => obj.values).flat();
//   console.log(allValues);
// }
// x(obj);

// or
// let data = [
//   { name: "a", values: [1, 2] },
//   { name: "b", values: [3] },
//   { name: "a", values: [4, 5] },
// ];
// function x(array) {
//   const allValues = array.reduce((acc, obj) => acc.concat(obj.values), []);
//   console.log(allValues);
// }
// x(data, []);

// We initialize an empty array called allValues.
// We iterate through each object in the data array using a for loop.
// For each object, we extract the values property and iterate through its elements using another for loop.
// Inside the inner loop, we push each value into the allValues array.
// After both loops complete, allValues contains all the values extracted from the objects in the original array.

// Code 3: Remove Duplicate characters from array of element using filter
// var myArray = ["a", 1, "a", 2, "1"];
// const newArray = myArray.filter(
//   (item, index, arr) =>
//     arr.indexOf(item) === index
// );
// console.log(newArray);

// Code 4:String reverse without reversing of individual words (Array of elements can be reverse with reverse() method but for string it is won't possible so required to split
// and then join().
// function removeDuplicates() {
//   var string = "India is my country";
//   let result = string
//     .split("")
//     .reverse()
//     .join("")
//     .split(" ")
//     .reverse()
//     .join(" ");
//   return result;
// }
// console.log(removeDuplicates());

// const array = ["Inshu", "Vinshu", "Payal"];
// const sortArray = array.sort((x, y) => x.localeCompare(y));
// console.log(sortArray);

// let arrayOfObjects = [
//   { name: "John", age: 30 },
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 35 },
// ];
// // let sortedArray = arrayOfObjects.name.sort((a, b) => a - b);
// // let firstNames = sortedArray.map((obj) => obj.name);
// // console.log(firstNames);

// function newObjectArray(array) {
//   let sortArray = array.map((item) => {
//     let arr = item.name;
//     // let newArr = arr.sort((a, b) => a - b);
//     return arr;
//   });

//   // Object.values(a).sort;
//   return sortArray;
// }

// let arr = newObjectArray(arrayOfObjects);
// // let sortedArr = arr.sort((a, b) => a.localeCompare(b));
// // console.log(sortedArr);
// let sortedArr = [...new Set(arr)].sort();
// console.log(sortedArr);

// function newObjectArray(array, key) {
//   let sortArray = array.map((item, key) => {
//     let arr = item;
//     console.log(key);
//     return arr;
//   });

//   return sortArray;
// }

// let arr = newObjectArray(arrayOfObjects, arrayOfObjects.name);
// // let sortedArr = arr.sort((a, b) => a.localeCompare(b));
// // console.log(sortedArr);
// let sortedArr = [...new Set(arr)].sort();
// console.log(sortedArr);

// let data = Object.values(arrayOfObjects[0]);
// console.log(data);
// // Use map function to extract the value of the name property from each object
// let firstNames = arrayOfObjects.map((obj) => obj.name);

// // Access the name of the first object in the resulting array
// // let firstName = firstNames[0];
// console.log(firstNames);

// let arrayOfObjects = [
//   { name: "John", age: 30 },
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 35 },
// ];

// // Accessing the name property of the first object using Object.values()
// let firstName = Object.values(arrayOfObjects[0])[0];
// console.log(firstName); // Output: John
// const array = [
//   { name: "Payal" },
//   { name: "Mayank" },
//   { name: "Parul" },
//   { name: "Vishwas" },
// ];
// const data = Object.values(array[0][0]);
// console.log(data);

let arrayOfObjects = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
];

// Sorting the array of objects based on the 'name' key
// arrayOfObjects.sort((a, b) => {
//   if (a.name < b.name) return -1;
//   if (a.name > b.name) return 1;
//   return 0;
// });
arrayOfObjects.sort((a, b) => {
  return a.name < b.name ? -1 : 1;
});

// Printing the sorted array of objects
console.log(arrayOfObjects);
