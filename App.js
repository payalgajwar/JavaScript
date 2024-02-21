// const int = 1.766584958675746364;

// int;
// const intSecond = int.toFixed(2);
// intSecond;
// console.log(intSecond);
// decimal;

// console.log(toString(int));

// console.log("Start JS");

// array = [4, 5, 7, 8];

// const duplicates = array.filter(
//   (ele, index, array) => array.indexOf(ele) !== index
// );
// console.log(array);

// const array = [
//   {
//     object1: "1",
//     object2: "a",
//     array: groupArray(),
//   },
//   {
//     object1: "1",
//     object2: "b",
//   },
//   {
//     object1: "3",
//     object2: "c",
//   },
//   {
//     object1: "4",
//     object2: "d",
//   },
// ];

// const groupArray = function x() {
//   var a = 19;
//   console.log(a);
// };
// Object.groupBy(array.object1);
// const duplicates = array.filter(
// (ele, index, array) => array.indexOf(ele) !== index
// );
// console.log(groupArray);

// array = [4, 5, 7, 8];

// const duplicates = arry => array.filter((ele, index) => array.indexOf(ele) !== index);
// const duplicateElementa = duplicates(array);

// indexOf() method

// console.log(duplicateElementa);

// console.log(a);
// dummy();
// var a =10;
// function dummy() {
//   console.log("string");
// }

// this === window;

const people = [
  { name: "a75", item1: false, item2: false },
  { name: "z32", item1: true, item2: false },
  { name: "e77", item1: false, item2: false },
];

const array = people.sort(function x(a, b) {
  return a.name < b.name ? -1 : 1;
});

// console.log(array);
// const array = [2, 5, 8, 3];
// function even(x) {
// return x.toString(2);
// }

const arr = array.map(even);
console.log(arr);
