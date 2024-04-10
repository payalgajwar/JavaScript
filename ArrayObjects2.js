// Write a function to transform the array:

const arr = [
  { name: "a", values: [1, 2] },
  { name: "b", values: [3] },
  { name: "a", values: [4, 5] },
];
// to:

// [
//   {name:'a',values:[1,2,4,5]},
//   {name:'b',values:[3]}
// ]

// console.log(arr[0].concat(arr[2]));

const res = Object.values(
  arr.reduce((obj, { name, values }) => {
    obj[name] = obj[name] ?? { name, values: [] };
    obj[name].values.push(...values);
    return obj;
  }, {})
);

console.log(res);
