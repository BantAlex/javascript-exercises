const add = function(n1,n2) {
	return n1 + n2;
};

const subtract = function(n1,n2) {
	return n1 - n2;
};

const sum = function(arr) {
  if (arr.length === 0){
    return 0;
  } else {
    return arr.reduce((n1,n2)=>n1+n2);
  }
};

const multiply = function(arr) {
  return arr.reduce((n1,n2) => n1 * n2 );
};

const power = function(n1,n2) {
  return Math.pow(n1,n2)
};

const factorial = function(num) {
  let arr2 = [1];
  for (let i = 1; i <= num; i++){
    arr2.push(i);
  }
    return multiply(arr2)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
