//  First, create the Fish constructor...

var Fish = function(name, colour){
  this.name = name;
  this.colour = colour;
  // this.swim = function(){
  //   console.log('splash');
  // }
}

// The function below replaces the function in the object above...
Fish.prototype = {
  swim: function(){
    console.log('splash ' +this.name);
  }
}

var myFish = new Fish('nemo', 'orange');
myFish.swim();


// The two requests below with list the Fish prototype functions... (two methods...)
console.log('fish proto', Fish.prototype)

console.log('nemo proto', Object.getPrototypeOf(myFish));

/////////////////
// NEW CONSTRUCTOR & PROTOTYPE EXAMPLE - BEAR

var Bear = function(age, type, weight){
  this.age = age;
  this.type = type;
  this.weight = weight;
}

Bear.prototype = {
  roar: function(){
    console.log('Roar!');
  },
  eat: function(){
    newWeight = this.weight += 2;
    console.log('current weight is: ' +newWeight)
  }
}

var myBear = new Bear(8, 'grizzly', 60);
myBear.roar();
myBear.eat();
