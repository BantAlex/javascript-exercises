const reverseString = function(str) {
    let newStr = str.split('')

    newStr.reverse();
    
  

    return newStr.join('');
};

console.log(reverseString('hoi'))

// Do not edit below this line
module.exports = reverseString;
