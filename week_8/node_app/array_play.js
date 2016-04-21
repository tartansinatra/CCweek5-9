// The following demonstrates how lodash can aid your functions by filtering through data.

// In this example, the function will filter for Even numbers and return them to the terminal...

var _ = require('lodash');


var a = [1,2,3,4,5,6,7,8,9,10];

var even = _.filter(a, function(num){
  return num %2 === 0;
});

console.log('even', even);

