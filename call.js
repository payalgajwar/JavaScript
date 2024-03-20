// Call, Apply, Bind;

const obj1 = {
  Name: "h",
  Address: "guna",
  NewFunction: x,
};
// obj1.NewFunction(); //In this case will assign fn to obj then call
// or
// const newObj1 = x.bind(obj1);   // In this case can directly pass obj(with its value) in function without initialising function inside obj
// newObj1();
// or
// x.call(obj1);
// or
// x.apply(obj1);

function x() {
  const data = this.Name + " " + this.Address;
  console.log(data);
}

// const obj2 = {
//   Name: "p",
//   Address: "g",
//   NewFunction: x,
// };
// obj2.NewFunction();

// const obj3 = {
//   Name: "S",
//   Address: "gun",
//   s: function main() {
//     x.bind(this)();
//   },
// };

// obj3.s();

// // Bind method - It will create a new function with specific given values and can call whenever needed, Its needed when want to preserve the context
// const listOfBuyers = {
//   Name: "Akash",
//   Item: "2",
//   PrintFunction: function x(state, country) {
//     const details = this.Name + " " + this.Item + " " + state + " " + country;
//     console.log(details);
//   },
// };
// listOfBuyers.PrintFunction("ab");

// const list = {
//   Name: "Abhishek",
//   Item: "1",
// };

// const newList = listOfBuyers.PrintFunction.bind(list, "ss", "jj");
// newList();

// const person = { name: "j" };
// function greet(message) {
//   console.log(message + " " + this.name);
// }
// const greetPerson = greet.bind(person);
// greetPerson("Hello");

////////////////////////////////////////////////////////////////////////////////////////

//// Apply method - // when want to invoke function immediately and want to pass argument in form of array or objrct to function
// ex -
// function fn(name, address) {
// here parameter will be normal (not in array) form
//   console.log(name + address);
// }
// fn.apply(this, ["jihu", "g"]); // calling function indicating first itself or null, then array assign

// function fn(a, b) {
//   console.log(a + b);
// }
// fn.apply(this, [5, 6]);
// or
// var arr = [5, 6];
// fn.apply(this, arr);

// let arr1 = [2, 7, 9];
// let arr2 = [1, 4, 7];

// function sumOfArrays(arr1, arr2) {
//   var sum = 0;
//   for (let i = 0; i < arr1.length; i++) {
//     sum += arr1[i];
//   }

//   for (let i = 0; i < arr2.length; i++) {
//     sum += arr2[i];
//   }
//   return sum;
// }

// var result = sumOfArrays.apply(null, [arr1, arr2]);
// console.log(result);

// const listOfBuyers = {
//   Name: "Akash",
//   Item: "2",
//   PrintFunction: function x(state, country) {
//     const details = this.Name + " " + this.Item + " " + state + " " + country;
//     console.log(details);
//   },
// };
// listOfBuyers.PrintFunction("ab");

// const list = {
//   Name: "Abhishek",
//   Item: "1",
// };

// listOfBuyers.PrintFunction.apply(list, ["ss", "jj"]);

///////////////////////////////////////////////////////////////////////////////////////////////////////

//// Call method -// when want to invoke function immediately and want to pass separate value/individual value to function ex
// function fn(name, address) {
//   console.log(name + " " + address);
// }
// fn.call(this / null / fn, "jihu", "g"); // calling function indicating first itself or null, then individual argument pass

// call method in case of object mostly use
// const listOfShoppers = {
//   Name: "Paypal",
//   Number: 399,
//   Newfn: function x(Address) {
//     const details = this.Name + " " + this.Number + " " + Address;
//     console.log(details);
//   },
// };
// listOfShoppers.Newfn("hh"); //normal fn call in object

// const listOfBuyers = {
//   Name: "Shiva",
//   Number: 999,
// };

// listOfShoppers.Newfn.call(listOfBuyers, "jjjj"); fn borrowed with call method use
