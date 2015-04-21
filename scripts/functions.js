$(document).ready(onReady);
function onReady() {
/*
 * PROBLEM 1: (easy)
 * Write a function that takes a string and checks to make sure that the string
 * has a length of exactly three. Return true if the string length is three or
 * false if it is not three.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function checkData(inputString){
	if(typeof inputString!=='string'|| inputString===""){
		$(".error").html('Invalid Input');
	}
	else if(inputString.length>3 || inputString.length<3 ){
		$(".error").html('false');
		$(".answer").html('');
		
	}
	else {
		$(".error").html('');
		$(".answer").html('true');
	};
};
$(".first-btn").click(function(){
	var inputString="";
	inputString = $("#input1").val();
	$('.answer').val(checkData(inputString));
});

/*
 * PROBLEM 2: (easy)
 * Write a function that, given two arrays of integers a and b, returns an array
 * that is formed by the elements of a followed by the elements of b.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function concatenateArrays(a, b) {
	if( a.toString()===""||b.toString()===""){
		$('.error2').html("Invalid Input");
		$('#answer2').html("");
	}
	else{
		$('.error2').html("");
		var finalArray=a.concat(b);
		//this console.logs the concatenated arrays
		console.log(finalArray);
		//this turns finalArray into a product that can print the 
		//commas onto the html.  Otherwise, the inner two
		// items will be right next to each other
		bestArray = "[" + finalArray.join(",") + "]";
		return bestArray;
	};
};
$(".second-btn").click(function(){
	var a = $("#array-a").val();
	//the .split() takes out the written commas and
	// turns the input string into an array and
	//puts honest to goodness array commas in between items
	a = a.split(",");
	var b = $("#array-b").val();
	b = b.split(",");
	console.log(b);
	//this displays an html version of the array
	$('#answer2').html(concatenateArrays(a, b));
});
/*
 * PROBLEM 3: (easy)
 * Proper nouns always begin with a capital letter, followed by small letters.
 * Write a function called `fixProperNoun` that takes a potentially improperly
 * capitalized proper noun and returns the same noun with the proper
 * capitalization.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function fixProperNoun(noun) {
	//checks for an input and whether its a number
	if (noun===""||!isNaN(noun)){
		$(".error3").html("Invalid Input");
		$('.answer3').html('');
	}
	else{
		$(".error3").html('');
		//changes everything to lower case
		var Noun = noun.toLowerCase();
		//grabs the first character
		var firstLetter=(Noun.charAt(0));
		//capitalizes the first character
		var upperCase = firstLetter.toUpperCase();
		//grabs the rest of the noun and ensures its lowercase
		var tailNoun = Noun.toLowerCase().substr(1);
		//concantenates the two back together
		var proNoun = upperCase + tailNoun;
		//makes the final product available
		return proNoun;
	};
};
$(".third-btn").click(function(){
	var noun = $("#input3").val();
	$('#input3').val(fixProperNoun(noun));
});

/*
 * PROBLEM 4: (easy)
 * Write a function called `sortLetters` that 
 * returns a string that sorts all the letters 
 * from a given string in the alphabetical order.
 *
 * If the input is invalid throw an 'Invalid Input'
 * exception.
 */
function sortLetters(inputString) {
	if(inputString===''||!isNaN(inputString)){
		$(".error4").html("Invalid Input");
		$('.answer4').html('');
		}
		else{
			$('.error4').html('');
			
	//Source = http://stackoverflow.com/questions/5285995/how-do-you-sort-letters-in-javascript-with-capital-and-lowercase-letters-combin
			var orderedString =(inputString.split('').sort().join(''));
		}
		return orderedString;
};
$(".fourth-btn").click(function(){
	var inputString = $(".input4").val();
	//this displays in html 
	$('.input4').val(sortLetters(inputString));
});
/*
 * PROBLEM 5: (easy)
 * Write a function called `absVal` that return the absolute value of a given 
 * integer. Don't use Math.abs(...)
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function absVal(integer) {
	console.log(typeof(integer));
	if (integer===""||isNaN(integer)){
		$(".error5").html("Invalid Input");
		$('.answer5').html('');
	}else{
		$(".error5").html("");
//stackoverflow.com/questions/9353929/get-the-absolute-value-of-a-number-in-javascript
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
		integer = integer*integer;
		integer = Math.sqrt(integer);
		return integer;
	}
};
$(".fifth-btn").click(function(){
	var integer = $(".input5").val();
	//this displays in html 
	$('.answer5').html(absVal(integer));
});
/*
 * PROBLEM 6: (easy)
 * Write a function called `myMin` that takes two integers and returns the
 * smaller of the two numbers.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM 7: (easy)
 * Write a function called `getMonth` that maps a given integer to a month.
 *
 * For example:
 * getMonth(1) == 'January'
 * getMonth(3) == 'March'
 * etc.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM 8: (medium)
 * Write a function called `sumSquares` that returns the sum of squares of all
 * integers from 1 up to and including a given positive, non-zero integer N.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/* 
 * PROBLEM 9: (medium)
 * Given an array of integers, write a function called `findMaxDiff` that finds
 * the maximal difference between any two adjacent elements.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM 10: (medium)
 * Write a function called `insertDashes` that transforms a given sentence into
 * a new one with dashes between each two consecutive letters.
 * For example: insertDashes('abba test') => a-b-b-a t-e-s-t
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/* 
 * PROBLEM 11: (medium)
 * Implement a function called `mySubstring` that can output the substring of 
 * the given string within specified bounds.
 * 
 * For example: mySubstring('abcde', 2, 3) === 'cd'
 * 
 * Don't use String.substring in your solution.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM 12: (medium)
 * Write a function called `splitSwap` that swaps two halves of a given array.
 * If the array has an odd number of elements the array should be split in half
 * by rounding down the number of elements divided by two.
 * 
 * For example: splitSwap([1,2,3,4,5]) === [3,4,5,1,2]
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM 13: (medium)
 * For given n and k write a function called `smallMultiples` that returns the
 * count of the number of multiples of k that are not greater than n.
 *
 * For example smallMultiples(4, 1) === 3 because 1*2, 1*3 and 1*4 are not
 * greater than 4.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

}


 