const removeFromArray = function(array , ...remove) {
    for(let i=0;  i<remove.length; i++){
        array = array.filter(
            function(array){
           return array !== remove[i];
        });
    }
    return array;
};

/*var removeFromArray = function(...args) {
   const array = args[0];
   console.log(array.filter(val => args.includes(val)));
   return array.filter(val => !args.includes(val));
 } */

// Do not edit below this line
module.exports = removeFromArray;
