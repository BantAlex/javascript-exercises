const convertToCelsius = function(f) {
  let result = (f-32) * (5/9)
  return Math.round(result * 10) / 10
};

const convertToFahrenheit = function(c) {
  let result = ((9/5) * c) + 32
  return Math.round(result * 10) / 10 
};

console.log(convertToCelsius(100));
console.log(convertToFahrenheit(0)); 

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
