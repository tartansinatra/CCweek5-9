

var myArray = [1,2,3,4,5,6];

var myForEach = function(array, whatToDoWithEachElement){
  for (item of array){
    whatToDoWithEachElement(item);
  }
}


var displayElement = function(element){
  console.log(element);
}

var displayElementTimesTwo = function(element){
  console.log(element*2);
}


// You can run the program from the terminal

// myForEach(myArray, displayElement);
// OR here's a 
myForEach(myArray, displayElementTimesTwo);
