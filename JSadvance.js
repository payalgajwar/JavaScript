// Closures -

// const OuterLayer = () => {
//   //Outer function/component
//   const a = 10;

//   const InnerLayer = () => {
//     //Inner function/component
//     const b = 12;
//     const sum = a + b; // if not find variable in its space then access a from its outer function
//     return sum;
//   };
//   return InnerLayer();
// };

// console.log(OuterLayer());

// 4. Example-
// var person = function (name) {
//   this.name = name;
// };
// person.prototype.age = 21;
// var piya = new person("Piya");
// var priya = new person("Priya");
// console.log(piya.age); //21
// console.log(priya.age); //21

console.log(Object.__proto__.__proto__);
Object.__proto;

