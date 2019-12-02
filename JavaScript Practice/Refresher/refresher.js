// Data types:

var myName = 'Beau' // var is used through whole program
myName = 8

let ourName = 'freeCodeCamp'// only used in the scope of where its declared

const pi = 3.14 // constant never changing

// Storing Data

var a; // Don't need semicolon but preferred
var b = 2 // Declare b and assign 2 to b
console.log(a)
a = 7
b = a

console.log(a)

// Initializing Variables w/ Assignment Operators

var aa = 9 // var a is declaring it and = 9 is initalizing it

var bb = 10
aa++
aa = aa - 1
a--

bb++
console.log('bb is: '+bb+' and aa is: '+aa)
bb += aa // bb += aa adds them and assigns it to bb
console.log('bb += aa. now bb is: '+bb)
bb -= aa
console.log(bb)
bb *= aa
console.log(bb)
bb /= aa
console.log(bb)

// Finding the remainder
var remainder
remainder = 11 % 2 // find remainder of 11 / 2
console.log(remainder) // if remainder was 0 the number is even

// String Fun

// including "" in a string
var myStr = 'I am a \"double quoted\" string'
console.log(myStr)

var newString = `a string can be used by back ticks`;
console.log(newString);

/**
 * 
 * 
 * \' single quote
 * \\ backslash
 * \n newline
 * \r carriage return
 * \t tab
 * \b backspace
 * \f form feed
 */

 var someString = "FirstLine\n\t\\SecondLine\nThirdLine"
 console.log(someString)

 someString += newString;

 firstLetter = someString[0];
 console.log(firstLetter)

 // we start count at 0 so we need length - 1
 lastLetter = someString[someString.length - 1];



// iterating through an array simply needs .length
var thisArray = [0, 1, 2, 3, 4, 5]
var ourTotal = 0

console.log("thisArray length is: "+thisArray.length)

for (var i = 0; i < thisArray.length; i++){
    ourTotal += thisArray[i]
    console.log(ourTotal)
}


var str = "  abr a cadab ra  ";
str = str.trim(); // removes spaces on the beginning and end of the string
str = str.replace(/\s+/g, '');
console.log(str)
