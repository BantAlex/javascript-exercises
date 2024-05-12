const findTheOldest = function(obj) {
    if (!obj[0].yearOfDeath){
        return obj.sort((a,b)=> (a.yearOfBirth - b.yearOfBirth) - (a.yearOfDeath - b.yearOfDeath))[1];
    } else {
        return obj.sort((a,b)=> (a.yearOfBirth - b.yearOfBirth) - (a.yearOfDeath - b.yearOfDeath))[0];
    }
};

// Do not edit below this line
module.exports = findTheOldest;


const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
console.log(people[0].yearOfDeath)