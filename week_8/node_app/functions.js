Function #1

function hello(name){
  console.log(name);
}

hello("valerie");


Function #2

function add(a,b){
  return a + b;
}

console.log("The value is "+ add(1,2));

// Function #3

function mood(name, mood, weather){
  console.log(name + " you are "+mood + " and the weather is " +weather);
}

mood("stuart", "cool", "overcast");

Function #4

function sum(){
  var i = 0;
  var total = 0;
  for (i = 0; i< arguments.length; i += 1){
    total += arguments[i];
  }
  return total;
}

console.log(sum(1,2,3));

Function #5

var hello = function(){
  console.log("Hello!");
}

// hello();

// Function #6

var add = function(a,b){
    return a + b;
}

var subtract = function(a,b){
  return a - b;
}


// Function #7
var wow = function(function_to_invoke){
  console.log(function_to_invoke(2,1));
}

wow(add);
wow(subtract);



