const repeatString = function(testString,repeatNumber) {
    if(repeatNumber<0) return 'ERROR';
    let newString='';
    for(let i=1; i<=repeatNumber; i++){
        newString += testString;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
