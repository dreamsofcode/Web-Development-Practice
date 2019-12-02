var myFirstArray = ["John", 23];

// 1 of the elements in the array is another array it is Nested or 
// a multi dimensional array
var nestedArray = [["the universe", 42], ["everything", 1010101]];

var indexOne = myFirstArray[0]
console.log(indexOne)

// modify array
myFirstArray[0] = "Mike"
console.log(myFirstArray)

// access elements in nested Arrays
var myData = nestedArray[0][0];
console.log(nestedArray);

// push amend/Add a new item to an array:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits)

// pop Remove the last element of an array:
fruits.pop();
console.log(fruits)

// shift Remove the first item of an array:
fruits.shift();
console.log(fruits)

// unshift Add new items to the beginning of an array:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon","Pineapple");
console.log(fruits)

// slice Select elements from an array:
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
console.log(citrus)

// splice Add items to the array:
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits)

