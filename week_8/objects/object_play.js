var myPerson = {
  name: 'Guybrush',
  age: 32, 
  weapon: 'cutlass',
  talk: function(){
    console.log('shiver me timbers, my name is ' +this.name);
  }
}

// NOTE: Emphasis on 'this.name' as opposed to 'self.name' which is used in Ruby to refer to a key:value pair in the current object.
myPerson.talk()

//////////////////////////////////

var myDog = {};

myDog.smell = 'musky';

console.log(myDog);

myDog.talk = function(){
  console.log('I am a dog and I smell ' + this.smell);
}

myDog.talk();

//////////////////////////////////
// Alternative to creating an object on line 15 is:
var myDog = Object.create(null);



//////////////////////////////////

// Create a bear object that has a type, name and roar method.

var aBear = {
  type: 'grizzly',
  name: 'Huggy',
  roar: function(){
    console.log('Totally Roarsome! My name is ' +this.name);
  }
}

aBear.roar()


