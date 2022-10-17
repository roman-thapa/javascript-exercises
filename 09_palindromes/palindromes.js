const palindromes = function (given) {
   let txt = given.replace(/[^A-Z]/ig, "");
   let lowerCase = txt.toLowerCase();
   let reverse = '';
   for (i=lowerCase.length-1; i>=0; i--){
        reverse += lowerCase[i];
        
    }
    if(lowerCase===reverse){
        return true;
    }
      else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
