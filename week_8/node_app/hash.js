var myPerson = {
  name: 'Guybrush',
  age: 32,
  weapon: 'cutlass'
};

console.log(myPerson);

// Reference a single key within the hash (aka Object)
console.log(myPerson.name);


// Reference a single key by setting a variable...
var myKey = "weapon";
console.log(myPerson[myKey]);


// Add a further key into the hash/ object...
myPerson["location"] = "california";
console.log(myPerson["location"]);

// or change the value of a key in the hash/ object...
myPerson["location"] = "Edinburgh";
console.log(myPerson["location"]);



