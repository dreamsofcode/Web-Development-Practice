
// local variables will take over a global if same name in a function

function wordBlacks(myNoun, myAdjective, myVerb, myAdverb) {

    var result = "";
    result += "The "+ myAdjective +" "+ myNoun +" "+" "+ myVerb + " to the store "+ myAdjective
    return result;
}

console.log(wordBlacks("dog", "big", "ran", "quickly"));
console.log(wordBlacks("bike", "slow", "flew", "slowly"));

