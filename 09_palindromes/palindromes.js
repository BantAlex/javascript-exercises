const palindromes = function (str) {
    let regex = /[^a-zA-Z0-9]/
    let reversed = str.split('').reverse().filter(char => !regex.test(char) ).join('');
    let actualString = str.split('').filter(char => !regex.test(char) ).join('');
    return reversed.toLowerCase() === actualString.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
