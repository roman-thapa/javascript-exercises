const fibonacci = function(target) {
    if(target<0){
        return "OOPS";
    }
    if (target===0) return 0;
    let fibonacciNumber=1;
    let arrayOfFibonacci = [];
    arrayOfFibonacci[0] = 1;
    arrayOfFibonacci[1] = 1;

    for (let i=1;i< +target;i++){
    arrayOfFibonacci[i+1] = arrayOfFibonacci[i] + arrayOfFibonacci[i-1];
    fibonacciNumber = arrayOfFibonacci[i];
    }

    return fibonacciNumber;

};

// Do not edit below this line
module.exports = fibonacci;
