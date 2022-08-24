// shortToLong - Used to sort objects by length (like arrays or strings) 
// Returns:
// 	positive number if val1 is longer than val2
//  negative number if val2 is longer than val1
//  0 if the length of both objects is equal
function shortToLong(val1, val2) {
	return val1.length - val2.length
}


// shortestToLongest has parameter: list
// An array of strings or other arrays of varying lengths
// Returns the array with values sorted by length, shortest to longest
function shortestToLongest(list) {
	// Use sort and shortToLong to return the elements in list ordered by length
    return list.sort(shortToLong)
}

// function capitalise(value) {
// 	return value[0].toUpperCase()+value.slice(1)
// }

// function isNumber(value) {
// 	return (typeof value === 'number')
// }

// getTheNumbers
//   Parameter: list
//      An array of different kinds of data (numbers, strings, etc)
//   Returns an array that only contains the numbers from list
// function getTheNumbers(list) {
// 	// Use filter and isNumber to return all the numbers in list
//     return list.filter(isNumber)
// }


// capitaliseFirst
// Parameter: strings
//		An array of strings
// Returns the array with the first word of each string capitalised
// function capitaliseFirst(strings) {
// 	// Use map and capitalise to return the strings with the first word of each string capitalised
//     return strings.map(capitalise)
// }



// console.log(capitaliseFirst("one day i will rule the world".split(" ")).join(" "))
// console.log(capitaliseFirst(["this is the first.", "this is second.", "finally the last one."]))

console.log(shortestToLongest(["different sizes", "with a clever callback function!", "strings of", "can be put in order."]))

// console.log(getTheNumbers([45,"3","cats",12,4,{key: "value"},29]))