// function sentence() {
//   console.log("World");
// }
// sentence();

// function no(x) {
//   console.log(x);
// }
// no(6);

// prompt();
// const value = prompt("hi");
// console.log(value);

// function num(value) {
//   console.log(value);
// }
// num(value);

// function numbers(a, b) {
//   //   const sum = a + b;
//   console.log(a + b);
// }

// numbers(2, 6);

// function sumOfTwoNumbers(a, b) {
// return a + b;
// }
// console.log(sumOfTwoNumbers(1, 7));

// const array = [1, 4, 3, 9];

// function maxNumber() {
// const arr = array.sort();
// console.log(arr);
// const arar = Math.max(...arr);
// console.log(arar);
// }

// console.log(maxNumber());

// function maxNumber(array) {
// const arr = array.sort();
// console.log(arr);
// return Math.max(...arr);
// }
// console.log(maxNumber(array));

// const x = "sggyuaj";
// function isPalindrome(str) {
// const palindromeString = str.split(”).reverse().join(”);
// console.log(palindromeString);
// return str === str.split().reverse().join();
// }
// console.log(isPalindrome(x));
function isPalindrome(str) {
  let rev = str.split("").reverse().join("");

  if (rev == str) {
    return true;
  }
  return false;
}

let str1 = "racecar";
let str2 = "nitin";
let str3 = "Rama";

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));
