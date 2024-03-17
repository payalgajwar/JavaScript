Call, Apply, Bind;

// Bind method
const listOfBuyers = {
  Name: "Akash",
  Item: "2",
  PrintFunction: function x(state, country) {
    const details = this.Name + " " + this.Item + " " + state + " " + country;
    console.log(details);
  },
};
listOfBuyers.PrintFunction("ab");

const list = {
  Name: "Abhishek",
  Item: "1",
};

const newList = listOfBuyers.PrintFunction.bind(list, "ss", "jj");
newList();

Apply method
const listOfBuyers = {
  Name: "Akash",
  Item: "2",
  PrintFunction: function x(state, country) {
    const details = this.Name + " " + this.Item + " " + state + " " + country;
    console.log(details);
  },
};
listOfBuyers.PrintFunction("ab");

const list = {
  Name: "Abhishek",
  Item: "1",
};

listOfBuyers.PrintFunction.apply(list, ["ss", "jj"]);

Call method
const listOfShoppers = {
  Name: "Paypal",
  Number: 399,
  Newfn: function x(Address) {
    const details = this.Name + " " + this.Number + " " + Address;
    console.log(details);
  },
};
listOfShoppers.Newfn("hh");

const listOfBuyers = {
  Name: "Shiva",
  Number: 999,
};

listOfShoppers.Newfn.call(listOfBuyers, "jjjj");
