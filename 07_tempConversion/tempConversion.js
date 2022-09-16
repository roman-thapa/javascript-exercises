const ftoc = function(fahrenheitValue) {
  let celsiusValue = ((fahrenheitValue -32)*5)/9;
  celsiusValue = Math.round(celsiusValue * 10) / 10;
  return celsiusValue;
};

const ctof = function(celsiusValue) {
  let fahrenheitValue = (celsiusValue * 9/5) + 32;
  fahrenheitValue = Math.round(fahrenheitValue*10)/10;
  return fahrenheitValue;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
