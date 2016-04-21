var myObject = {};

myObject.shape = 'circle';
myObject.radius = 10;

console.log(myObject);


// Another way to create an object... instead of Object.new (in Ruby), it's...
var myOtherObject = new Object();

myOtherObject.size = 6;
myOtherObject.color = 'red';

console.log(myOtherObject);


 Creating a set of objects of similar properties... (almost like a Class in Ruby) is called a CONSTRUCTOR FUNCTION...

var House = function(sqFeet, bathrooms, bedrooms){
  this.sqFeet = sqFeet;
  this.bathrooms = bathrooms;
  this.bedrooms = bedrooms;
}

var house1 = new House(1000, 3, 4);
var house2 = new House(100, 1, 2);

console.log(house1);
console.log(house2);

// To display just a single property... 
console.log(house1.sqFeet);

// or you can access the same data as follows... 
console.log(house1["sqFeet"]);

// or you can assign a variable to the property and call it via the variable... 
var x = "sqFeet"
console.log(house1[x]);


 Define a new functions to count the number of rooms in a house...
this.numberOfRooms = function(){
  return(this.bathrooms + this.bedrooms);
}

//  We can call the above functions by parentheses after the function title...
console.log(house1.numberOfRooms());




var Office = function(desks, meetingRooms){
  this.desks = desks;
  this.meetingRooms = meetingRooms;

this.avgDesksPerRoom = function(){
  return(this.desks / this.meetingRooms);
  }
}

var office1 = new Office(15, 3);
var office2 = new Office(12, 3);
var office3 = new Office(20, 2);

console.log(office1.avgDesksPerRoom());
console.log(office2.avgDesksPerRoom());
console.log(office3.avgDesksPerRoom());
