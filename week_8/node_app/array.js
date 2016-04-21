var guitars = ["fender", "gibson", "gretsch"];
console.log(guitars)

var drums = new Array();
drums.push("gretsch");
drums.push("yamaha");
console.log(drums);

console.log(drums[0]);

drums.push("zildjan");
console.log(drums[2]);

drums[0] = "bongo";
console.log(drums[0]);


// inserts a new item at array position #10...
drums[10] = "Steel";
console.log(drums);

// confirms the datatype of item #4 in the array
console.log(typeof(drums[4]));

// gives the number of items in the array named "drums"
// console.log(drums.length);

// adds a new item to the array
var newLength = drums.push("kettle");
console.log(drums);

// counts the number of items in the array
console.log(newLength);


// removes the last item from the array
// var last drums.pop = drums();

// removes multiple items from the array starting at index 0
var result = drums.slice(0,3);


// removes all items where the datatype is undefined
function removeUndefined(value){
  return value !== undefined;
}

var niceArray = drums.filter(removeUndefined);
console.log(niceArray);









