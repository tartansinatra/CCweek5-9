//Section 1

//what types are these? Write your answer in a comment beside it.

1; //number
"cat"; //string
true; //boolean
[]; // array
{}; // hash aka object
1.1; // number 
undefined; // undefined

//Section 2

// what is the truthy/falsiness values of the following
// write your answer in a comment beside it
// you can use an if to test this...
1; //true
"cat";  //true
true; // true
NaN; // false
[]; // true
{}; // true
undefined;  // false
"";  // false
0; // false


//Section 3

//Using examples that are different from above...

//3.1 Assign a variable that is a number
// var = 0;

// //3.2 Assign a variable that is a string
// var = "";

// //3.3 Assign a variable that is a boolean
// var = true;

// //3.4 Assign a variable that is an object
// var = {};

//Section 4
//4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false


  // if() = true
  // console.log("Hello");
  // else
  // console.log('Bye');


//Section 5
var animals = ["raccoon","hedgehog","mouse","gerbil"];

//5.1. Assign the first element to a variable
a1 = animals[0] 
console.log(a1);

//5.2. Assign the last element to a variable
var last = animals[animals.length -1]
console.log(last);

//5.3. Assign the length of an array to a variable
var newLength = animals.length
console.log(newLength);

//5.4. Add an item to the end of the array
animals.push('squirrel');
console.log(animals);


//5.5. Add an item to the start of the array
animals.unshift("pine martin");
console.log(animals);


//5.6. Assign the index of hedgehog to a variable
var pos = animals.indexOf("hedgehog");
console.log(pos);



//Section 6

// //6.1 Create an array of 5 vegetables

var vegetables = ["cucumber", "green pepper", "aubergine", "onion", "potato"];

// //6.2 Loop over the array and write to the console using a "while"

var i = 0;
  while(i < vegetables.length){
  console.log(vegetables[i]);
  i++;
}



// // //6.3 Loop again using a "for" with a counter

 for(var i = 0; i<vegetables.length; i++){
  console.log(vegetables[i]);
}


// // //6.4 Loop again using a "for in"


// FIRST FOR.. IN STATEMENT
var aubergine = {
  color: "purple",
  length: 789
}

for(var prop in aubergine){
  console.log(aubergine[prop]);
}

// SECOND FOR.. IN STATEMENT LISTED WITH INDEX NUMBER
for(var veg in vegetables){
  console.log(veg + " = " + vegetables[veg]);
}


// //Section 7
var accounts = [
  { name: 'jay',
    amount: 125.50,
    type: 'personal'
  },
  { name: 'val',
    amount: 55125.10,
    type: 'business'
  },
  { name: 'marc',
    amount: 400.00,
    type: 'personal'
  },
  { name: 'keith',
    amount: 220.25,
    type: 'business'
  },
  { name: 'rick',
    amount: 1.00,
    type: 'personal'
  },
]

// //7.1 Calculate the total cash in accounts

function sumTotalCash(){
  var total = 0;
  for(i = 0; i<accounts.length; i+= 1){
   total += accounts[i]["amount"];
  }
  return total;
}

console.log(sumTotalCash([accounts]));


// Alternative method with a FOR LOOP STATEMENT...

function totalCash(){
  var baseCash = 0;
  for(var account of accounts){
    baseCash = baseCash + account['amount'];
  }
  return baseCash;
}

totalCash();

// //7.2 Find the name of the account with the largest balance


function largestBalance(){
  var biggest = 0;
  var biggestName = "";
  for(i in accounts){
    if(accounts[i].amount > biggest){
      biggest = accounts[i].amount;
      biggestName = accounts[i].name;
    }
  }
  return biggestName;
}

console.log('Largest Balance is owned by ' +largestBalance());



// Alternatively...

function mostCash(){
  var baseCash = 0;
  var mostName = "";
  for(account in accounts){
    if(baseCash < accounts[account]['amount']){
      baseCash = accounts[account]['amount'];
      mostName = accounts[account]['name'];
    }
  }
  return mostName;
} 

console.log('Largest Balance is owned by ' +mostCash());

// //7.3 Find the name of the account with the smallest balance

function smallestBalance(){
  var tinyCash = -1;
  var tinyName = "";
  for(account in accounts){
    if(tinyCash > accounts[account]['amount']){
      tinyCash = accounts[account]['amount'];
      tinyName = accounts[account]['name'];
    }
  }
  return tinyName;
}

console.log('Smallest Balance is owned by ' +smallestBalance());

// //7.4 Calculate the average bank account value

function avgBalance(){
  var totalSum = totalCash();
  var avgSum = totalSum /accounts.length;
  return avgSum;
}
console.log('the average balance is ' +avgBalance());







// // //7.5 Find the value of marcs bank account

function accountValue(name){
  for (var i=1;i<accounts.length;i++) {
    if (accounts[i].name == name) {
      return accounts[i].amount;
    }
  }
  return false;
}
console.log(accountValue("marc"));







// // //7.6 Find the holder of the largest bank account
function maxHolder() {
  var maxVal = largestBalance();
  for (var i=0;i<accounts.length;i++) {
    if (accounts[i].amount == maxVal) {
      return accounts[i].name;
    }
  }
  return false;
}
console.log(maxHolder());




// // //7.7 Calculate the total cash in business accounts

// function sumBizCash(){
//   var total = 0;
//   for(i = 0; i<accounts.length; i+= 1){
//    total += accounts[i]["amount"] && accounts[i]["type"]["business"];
//   }
//   }
//   return total;
// }

// console.log(sumBizCash([accounts]));



function sumBizCash(){
  var baseCash = 0;
    for(var account of accounts){
      baseCash = baseCash + account['amount'] && account['type']['business'];
    }
    console.log(baseCash);
  }




// //7.8 Find the largest personal account owner


// //Section 8
// //Assign a variable myPerson to a hash, giving them a name, height favourate food

// var myPerson = {
//   name: "Stuart",
//   height: 1.65,
//   fav_food: "lasagne" 
// }