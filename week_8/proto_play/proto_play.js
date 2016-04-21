var wisePerson = {
  wisdom: function(){
    console.log('commit often');
  }
}

var myPerson = Object.create(wisePerson);
/////////////////////////////////////
// We can 'swap out' the value with any object created - so either null or in this case, the above prototype 'wisePerson'.  

// So WHATEVER we pass any object we choose into the Object.create.  In this case we passed in the NEW PROTOTYPE (as above)! 

myPerson.walk = function(){
  console.log('left right');
}

myPerson.walk();

myPerson.wisdom();