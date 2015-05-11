//iterative

function fib(num) {
	var fibNum = 1;
	var prev = 1;
	var temp;
	for(var i=0; i<num; i++){
		temp = fibNum;
		fibNum += prev;
		prev = temp;
	}
}


function fibR(n) {
	if (n <= 2) {
		return 1;
	}
	return (fibR(n-1) + fibR(n-2))
}
