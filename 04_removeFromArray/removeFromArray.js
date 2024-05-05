const removeFromArray = function(arr, ...args) {

    // return arr.includes(2)
    //return arr.filter((remove) => remove != args[i]);
    let newArr = []; 
    for (let i = 0; i < arr.length; i++){
        if (!args.includes(arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr;
    
};

console.log(removeFromArray([0,2,6,7,3,2,1,2,2,2,2,2],2,7,3,1,0,6))
// Do not edit below this line
module.exports = removeFromArray;
