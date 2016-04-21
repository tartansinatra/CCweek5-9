var pets = ["dog", "cat", "pika", "mongoose"];

var person = {
  name: "Oscar",
  age: 19
}


// The 'for' loop below will start at index #1 and run until the index.length cannot be exceeded AND increment i++ (i + 1) to move on through the array

// for(var i = 0; i<pets.length; i++){
//   console.log(pets[i]);
// }

// The above is the correct version of the following...
// for(pet in pets){
//   console.log(pet.);
// }



// The 'For In' loop
// for(var prop in person){
//   console.log(prop + " = " + person[prop]);
// }

// The 'while loop'
var x = 0;
while(x < 10){
  console.log("loop " + x);
  //x = x + 1 is aka...
  x++;
}

