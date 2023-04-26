console.log(replicate(1, 69)) // [69]

//Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.

function sumRange(num){
	if(num == 1) return 1;

	return num + sumRange(num - 1);
}

// Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.

function power(base, exponent){
	if(exponent == 0) 
        return 1;
    else if(exponent == 1) 
        return base;
    else
	    return base * power(base, exponent - 1 );
}

// Write a function that returns the factorial of a number. As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it, and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.

function fact(num) {
    if(num == 1)
        return 1;
    
    return num * fact(num - 1)
}

// Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function

function all(array, funct){
	var copy = copy || array.slice(); 

	if(copy.length === 0) return true;

	if(funct(copy[0])){
		copy.shift();
		return all(copy, funct);
	} else {
		return false;
	}
}

// Write a function called productOfArray which takes in an array of numbers and returns the product of them all

function productOfArray(arr) {
    if(arr.length == 0) return 0

    return arr[0] * productOfArray(arr.slice(1));
}

// Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.

function contains(obj, value){
	for(var key in obj){
		if(typeof obj[key] === 'object'){
			return contains(obj[key], value);
		}

		if (obj[key] === value){
			return true;
		}
	}
	return false;
}

// Given a multi-dimensional integer array, return the total number of integers stored inside this array

function totalIntegers(array){
	if(array.length === 0) return 0;

	let total = 0;
	let first = array.shift();

	if (Array.isArray(first)){
		total += totalIntegers(first); 
	} else if (Number.isInteger(first)) {
		total += 1;
	}

	return total + totalIntegers(array);
}

// Write a function that sums squares of numbers in list that may contain more lists

function SumSquares(array) {
    if(array.length == 0) return 0;

    let total = 0;

	for(let i = 0; i < array.length; i++){
		if(Array.isArray(array[i])){
			total += SumSquares(array[i]);
		} else {
			total += array[i] * array[i];
		}
		
	}
	return total;
}

// The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.

function replicate(times, number) {
    if(times < 0) return []

    return [number].concat(replicate(times - 1, number));
}