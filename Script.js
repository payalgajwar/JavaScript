let score = prompt("Enter score");
let grade;
if (score >= 80 && score <= 100) {
  grade = "A";
} else if (score >= 60 && score < 80) {
  grade = "B";
} else if (score >= 0 && score < 60) {
  grade = "C";
}

console.log("Student score grade - ", grade);

// or
// let num = prompt("number");
// if (num >= 80 && num <= 100) {
//   console.log("A");
// } else if (num >= 60 && num < 80) {
//   console.log("B");
// } else {
//   console.log("C");
// }
