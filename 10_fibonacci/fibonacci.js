const fibonacci = function(target) {
    if(target<=0){
        return "OOPS";
    }
    let fibonacciNumber=1;
    let previous = [];
    previous[0] = 1;
    previous[1] = 1;

    for (let i=1;i< +target;i++){
    previous[i+1] = previous[i] + previous[i-1];
    fibonacciNumber = previous[i];
    }

    return fibonacciNumber;

};

// Do not edit below this line
module.exports = fibonacci;
