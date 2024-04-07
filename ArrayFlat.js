//flat() method in array - according to depth decalaration will create new array by concatenates sub-array(child) elements, (according to depth bracket remove)default depth - 1

let arr1 = [[1, 4, [4], [3, 8]]]; //multilayer array initialization i.e full array - [[1, 4, [4], [3, 8]]] in which parent array [1, 4]-child is [4] and [3, 8] (imagine in tree form)
const arrayNew = arr1.flat(0); //()- declare depth, for 1 -> only first bracket remove -[1, 4, [4], [3, 8]], declare 2- [ 1, 4, 4, 3, 8 ], infinity - [ 1, 4, 4, 3, 8 ], 0 - no remove output- [[1, 4, [4], [3, 8]]]
console.log(arrayNew);
