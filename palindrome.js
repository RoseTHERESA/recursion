
//Define a recursive function that returns true 
//if a string is a palindrome and false otherwise.

//assumptions: we do not ignore white spaces,
//palindrome checking is case sensitive

//iterative

function palCheck(s){
	for (i=0; i<=s.length/2; i++)
		if (s[i] !== s[s.length-i-1])
			return false;
	return true;
}



//recursive

function palCheckR(s){
	//empty string is a palindrome
	if(s.length === 0)
		return true;

	//single-character string is a palindrome
	else if (s.length === 1)
		return true;

 	//if first and last chars do not match, not a palindrome
	else if (s[0] !== s[s.length-1])
		return false;

	//recursive call on substring of s with no first and last chars
	else 
		return palCheckR(s.substring(1,s.length-1));
} 