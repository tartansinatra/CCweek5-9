// Function #1


// var name = 'Jay';

// var talk = function(){
//   var name = "Rick"
//   console.log("How is Friends? " + name);
// }

// talk();
// console.log('the global name is' + name)

// Function #2

 var greet = function(isHappy){

  var text = "";

  if(isHappy){
    text = ('Hello my friend');
  }else{
    text = ('Thump');
  }

  var displayText = function(){
    console.log(text);
  }

  displayText();



 }

 greet(true);
