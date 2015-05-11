//Define a function that takes an argument n 
//and returns the lyrics to 99 bottles of beer on the wall, 
//starting with that number n. 

//iterative
function song(n){
  //test for valid input n
  if (n <= 0) {
  	console.log("ERROR: start with an integer 1 or greater.");
  	return;
  }
  for (i=n; n>1; n--){
    console.log(n + " bottles of beer on the wall.");
  	console.log(n + " bottles of beer.");
  	console.log("Take 1 down.");
  	console.log("Pass it around.");
  	if (n>2)
  		console.log((n - 1) + " bottles of beer on the wall.");
  	else // n==2
  		console.log("1 bottle of beer on the wall.");
  	console.log("");  //put a blank line between the verses	
  }
//now i equals 1
  console.log("1 bottle of beer on the wall.");
  console.log("1 bottle of beer.");
  console.log("Take 1 down.");
  console.log("Pass it around.");
  console.log("No bottles of beer.");
} 

//recursive

function songR(n){
  //test for valid input n
  if (n <= 0) {
  	console.log("ERROR: start with an integer 1 or greater.");
  	return;
  }
  else if (n === 1) {
  	console.log("1 bottle of beer on the wall.");
  	console.log("1 bottle of beer.");
  	console.log("Take 1 down.");
  	console.log("Pass it around.");
  	console.log("No bottles of beer.");
  } 
  else { // n > 1 
  	console.log(n + " bottles of beer on the wall");
  	console.log(n + " bottles of beer.");
  	console.log("Take 1 down.");
  	console.log("Pass it around.");
  	if (n>2)
  		console.log((n - 1) + " bottles of beer on the wall.");
  	else // n==2
  		console.log("1 bottle of beer on the wall.");
  	console.log("");  //put a blank line between the verses
  	songR(n-1);
  } 
}

