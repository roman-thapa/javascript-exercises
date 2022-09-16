const reverseString = function(given) {
    let numOfLetter = given.length -1 ;
    let arrayOfGiven = given.split("");
    let reverseOfGiven = "";
    for(let i = numOfLetter; i>=0; i--){
        reverseOfGiven += arrayOfGiven[i];
    }
    return reverseOfGiven;
    //return given.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
