//takes a number x and 
//returns sum of all digits between 0 and x.

//iterative -- needs work -- copied from another assignemnt

function range(x) {
  var array = [];
    for (var i = 0; i <= x; i++)
      array.push(i);
  }
  return array;

function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++)
    total += array[i];
  return total;
}


//recursive, key-value notation for jasmine

sumOfRangeR: function(num) {
  return function sumOfRangeRInner(num) {
    if (num === 1) {
      return 1;
    } else {
      return num + sumOfRangeRInner(num-1);
    }
  }

