// Reduce(still if not get understand read from W3school) = it will return single result(accumulated value) of an array after iterations, and it require callback fn(accumulator, cummmulator)
// accumalotr - must have intial value to initiate (mostly it will consider first value of array for its first iteration but if initial value will be passed with fn(for example- arr.reduce(fn, intial value)) then it will take passed value as initial value)
// cummulator - current value if accumalator is first value of array then cummulator take second value to start iteration, otherwise it will take first value as current

// const array = [2, 4, 7, 9];
// function isfn(x, y) { //in this for first iteration x is accumalator-2(value) and y is cummualtor -4(value)
//  return  y = x+2;  // so 1st iteration (4 = 2+2; return-4), then 2nd iteration x=4, y=7 (7=4+2; return 6), then x=6, y=9 (9=6+2; return 8) x=8 that si ans=8
// }

// console.log(array.reduce(isfn)); // in this case initial value for fn accumalator not passed so it will take first value of array as initial value;

// const numbers = [15.5, 2.3, 1.1, 4.7];
// console.log(numbers.reduce(getSum, 0)); // getsum- callback function and 0 - its initial value for accumalator

// function getSum(total, num) {
//accumalator is already -0 then current value for iteration will be start taken from 15.5.
//   return total + Math.round(num);
// }

//in this case without giving intial intial value still current value test will perform on every value
// const array = [2, 6, 7, 9]; // in this accumulator initial value is 2 and cureent value which is (x) will return result according to x%2===0 which is use to find even so it will automatically set output in boolean form true for even and false form odd
// accumalator(true) because consider 2 as initial value and x(currentvalue) test will be apply on this which will give output - true so accumalor value - true
// console.log(array.reduce(myfunction)); or console.log(array.reduce(myfunction, false));
// function myfunction(x) {
//   return x % 2 === 0; //output true if array have more odd values then even then output will be false or if intial value provide as false then get false
// }

// filter = returns value in form of boolean

// const array = [2, 4, 7, 9];
// function isEven(x) {
//   return x % 2 === 0;
// }
// console.log(x % 2 === 0) //get  output for every value of array in boolean
// or
// const y = x % 2 === 0;
//   console.log(y);

// console.log(array.filter(isEven)); // get even array value

// map - allows iteration/loop through every value of array and perform an

// function double(x) {
//   y = x * 2;
//   console.log(y);  //to get every value double in array
//   return x % 2 === 0; //get output in boolean form for every value of array
//   x % 2 === 0;
//     return x; // this is wrong because here you'r always returning x not the result of x%2 === 0; correct it doing this  return x % 2 === 0;
// }

// const array = [2, 4, 7, 9];
// console.log(array.map(double));
// console.log(array.map((double) => double % 2)); // get every value's remender after dividing every value by 2 in array
// console.log(array.map((double) => double % 2 === 0)); //get output in boolean form for every value of array
