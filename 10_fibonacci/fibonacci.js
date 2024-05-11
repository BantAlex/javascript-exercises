const fibonacci = function(fibNum) {
    let count
    if (typeof fibNum !== 'number') {
        count = parseInt(fibNum)
    } else {
        count = fibNum
    }

    if (count < 0) return "OOPS";
    if (count == 0) return 0;

    let firstPrev = 1;
    let secondPrev = 0;

    for (let i = 2; i <= count; i++) {
        let current = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = current;
    }

    return firstPrev;

};



console.log(fibonacci(-4));

// Do not edit below this line
module.exports = fibonacci;

// In this exercise, the Fibonacci sequence used is 1, 1, 2, 3, 5, 8, etc.
//A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers.