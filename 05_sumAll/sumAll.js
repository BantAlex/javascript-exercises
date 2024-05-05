const sumAll = function(first,last) {
    let result = 0;

    if (first !== parseInt(first) || last !== parseInt(last) || first < 0 || last < 0){
        return "ERROR";
    };
    if (first < last){
        for (let i = first; i <= last; i++){
            result+= i;
        } 
    } else if (first > last){
        for (let i = last; i <= first; i++){
            result += i;
        }
    } else {
        return first;
    }
    
    

    return result;
};


console.log(sumAll(4,1));
// Do not edit below this line
module.exports = sumAll;
