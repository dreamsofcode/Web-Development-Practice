/**
Template literals is a way to deal with strings .
Template literals uses `backticks` to write a string within .
Better to use with templates has multi line , concatenation of variables and expressions .
 */




//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
/**
const name = 'Mike';
const message = 'Hi '+name+',\n';

const another = 
`Hi ${name} ${2+3},

Thank you for joining my mailing list.

Regards,
Chris`;

 */


//https://medium.com/javascript-in-plain-english/es6-template-literals-5ffe0e7a692a



/** 
normal strings
var name = "Marina" ;
var hello = "Hello "+ name ;
console.log(hello); //Hello Marina
*/

/**
 * t uses a `backticks` to write string within it , 
 * so you can write single and double quotes as much 
 * as you need without thinking to alternate between them , 
 * they will show as you write them .
 */
var template = `Hello from "template literals" article , check 
previous one 'arrow functions'.` ;
console.log(template) // Hello from "template literals" article , check previous one 'arrow functions'.

//variables 
let name = "Marina" ;
let hello = ` Hello ${name} .`
console.log(hello); // Hello Marina .

//expressions
let isWorld = true ;
let welcome = ` Hello ${ isWorld ? "World" : "me" } ! ` ;
console.log(welcome); // Hello World ! 
