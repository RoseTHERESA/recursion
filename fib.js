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

/* recursive
						fib (5)
					fib(4) + fib(3)
		fib(3) + fib(2)		fib(2) + fib()
fib(2) + fib(1)				
*/

function fibR(n) {
	if (n <= 2) {
		return 1;
	}
	return (fibR(n-1) + fibR(n-2))
}
