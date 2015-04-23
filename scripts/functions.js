$(document).ready(onReady);
function onReady() {
"use strict";
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
	}
}
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
		var bestArray = "[" + finalArray.join(",") + "]";
		return bestArray;
	}
}
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
	}
}
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
			return orderedString;
		}
}
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
}
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
 function myMin(a, b) {
	if( a===""||b===""||isNaN(a)||isNaN(b)){
		$('.error6').html("Invalid Input");
		$('.answer6').html("");
	}else if(a>b){
		$('.error6').html("");
		return b;
	}else{
		$('.error6').html("");
		return a;
	}
}
$(".sixth-btn").click(function(){
	var a = $(".input6a").val();
	var b = $(".input6b").val();
	$('.answer6').html(myMin(a, b));
});

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
 function getMonth(number){
  	switch(number){
  		case "1": 
  			return "January";
  		case "2": 
  			return "February";
  		case "3": 
  			return "March";
  		case "4": 
  			return "April";
  		case "5": 
  			return "May";
  		case "6": 
  			return "June";
  		case "7": 
  			return "July";
  		case "8": 
  			return "August";
  		case "9": 
  			return "September";
  		case "10": 
  			return "October";
  		case "11": 
  			return "November";
  		case "12": 
  			return "December";
  		default: 
  			return "Invalid Input";
  	}
}
$(".btn-svn").click(function(){
	var number = $(".input7").val();
	$('.answer7').html(getMonth(number));
});
/*
 * PROBLEM 8: (medium)
 * Write a function called `sumSquares` that returns the sum of squares of all
 * integers from 1 up to and including a given positive, non-zero integer N.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
 function sumSquares(N){
 	var array=[];
 	var myTotal = 0;
 	if( N===""||isNaN(N)||N<=0){
		$('.error8').html("Invalid Input");
		$('.answer8').html("");
	}else if(N>99){
		$('.error8').html("Slow down John Wayne, lets choose a number smaller than 100."+"<br>"+"I don't like to multiply THAT much!");
		$('.answer8').html("");
	}
	else {
		$('.error8').html("");
		for(var i=1; i<=N;i++){
			var square = i*i;
			array.push(square);
		}
		console.log(array);
//http://stackoverflow.com/questions/1230233/how-to-go-through-an-array-and-add-their-values
		var total=0;
		for(i in array){ 
			total += array[i]; 
		}
		return total;
//...and here is another way to do it, same source
		// var sum = array.reduce(add, 0);
		// function add(a, b) {
  //   		return a + b;
		// }
		// return sum;
//..this time in jQuery, same source
		// var total = 0;
		// $.each(array,function() {
		//     total += this;
		// });
		// return total;
	}
}
 $(".btn-eight").click(function(){
	var N = $(".input8").val();
	$('.answer8').html(sumSquares(N));
});

/* 
 * PROBLEM 9: (medium)
 * Given an array of integers, write a function called `findMaxDiff` that finds
 * the maximal difference between any two adjacent elements.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function findMaxDiff(array) {
	var Jimmy=[];
	var Ymmij=[];
	for (var i=0;i<array.length; i++){
		if(array.toString()===""||isNaN(array[i])){
			$('.error9').html("Invalid Input");
			$('.answer9').html("");
		}
		else {
			$('.error9').html("");				
			for(i=1; i<array.length;i++){
				//Jimmy and Ymmij are arrays of the differences
				//between adjacent elements, one subtracts 
				//left to right and one subtracts right to left
				Jimmy.push(array[i]-array[i-1]);
				Ymmij.push(array[i-1]-array[i]);
				//both Jimmy & Ymmij console all iterations of their arrays
				//as they build up to the full length arrays, but only
				//the single element array(first iteration) can be accessed
				//of each, so we need be able to grab the full length arrays.
				//Hence, we create "var Bill" to compare them to.			
				var Bill=array.length-1;
				if(Jimmy.length==Bill&&Ymmij.length==Bill){
					//find the max value of the differences
					Jimmy=Math.max.apply(null,Jimmy);
					Ymmij=Math.max.apply(null,Ymmij);
					//compare each max value
					if (Jimmy>Ymmij){
						return Jimmy;
					}else{
						return Ymmij;
					}
				}
			}
		}
	}
}
$(".ninth-btn").click(function(){
	var a = $(".input9").val();
	//the .split() takes out the written commas and
	// turns the input string into an array and
	//puts honest to goodness array commas in between items
	var array = a.split(",");
	$('.answer9').html(findMaxDiff(array));
});
/*
 * PROBLEM 10: (medium)
 * Write a function called `insertDashes` that transforms a given sentence into
 * a new one with dashes between each two consecutive letters.
 * For example: insertDashes('abba test') => a-b-b-a t-e-s-t
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function insertDashes(string){
	if (string===""){
		$(".error10").html("Invalid Input");
	}else{
		$(".error10").html("");
		string=string.split('').join('-');
	//this next part uses regex and .replace() function
	//to replace any instance of "- -"" within string
	//source: developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
	//otherwise, without the regex /g (meaning global), .replace() only replaced
	//the first instance of "- -"
		var re = /- -/g;
		string=string.replace(re,' ');
		console.log(string);
		return string;
	}
}

 $(".tenth-btn").click(function(){
	var string = $(".input10").val();
	$('.input10').val(insertDashes(string));
});

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
function mySubstring(string, a, b){
	if(string===""||a===""||b===""||isNaN(a)||
		isNaN(b)||a>b||a<=0||b>string.length){
		$(".error11").html("Invalid Input");
		$('.answer11').html("");
	}
	else {
			$(".error11").html("");
		//while b is a number, its still a string type so
		//b+1=b1 not b+1, so we have to change b to a number
		//which changes + to addition rather than concantenation
			b=parseInt(b)+1;
			string=string.slice(a, b);
			return string;
		}
}
$(".btn-eleven").click(function(){
	var string = $(".input11").val();
	var a = $(".input11a").val();
	var b = $(".input11b").val();
	$('.answer11').html(mySubstring(string, a, b));
});
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
function splitSwap(array){
	if(array===""){
		$(".error12").html("Invalid Input");
		$('.answer12').html("");
	}
	else {
			$(".error12").html("");
			array=array.split(",");
			var rightArray = array.splice(0, Math.floor(array.length/2));
			array=array.concat(rightArray);
			array = "[" + array.join(",") + "]";
			return array;
		}
}
$(".btn-twelve").click(function(){
	var array = $(".input12").val();
	$('.answer12').html(splitSwap(array));
});

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
 function smallMultiples(n, k){
 	var array=[];
 	if(n===""||k===""||n>=k||isNaN(n)||isNaN(k)){
 		$(".error13").html("Invalid Input");
		$('.answer13').html("");
 	}else{
 		$(".error13").html("");
 		//b/c were not counting n*1 as a multiple
 		//we start at var i=2 and go up to number k. 
 		for (var i=2; i<=k;i++){
 			//we start figuring out how many numbers
 			//can we multiply n by before we = k.
			if(i*n<=k){
				//now we build an array of acceptable
				//outcomes so we can count them
				array.push(i);
			}
 		}
 		//here we count the number of acceptable answers 
 		//we were looking for
 		return "smallMultiples === "+array.length;
 	}
}
$(".btn-13").click(function(){
	var n = $(".input13a").val();
	var k = $(".input13b").val();
	k=parseInt(k);
	n=parseInt(n);
	$('.answer13').html(smallMultiples(n,k));
});
}


 