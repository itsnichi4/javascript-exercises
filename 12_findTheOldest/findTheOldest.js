const findTheOldest = function (arr) {
    let filter = arr.map(people => {
        if (people.yearOfDeath === undefined) {
            return 2023 - people.yearOfBirth;
        }
        else {
            return people.yearOfDeath - people.yearOfBirth;
        }
    });

    let maxAge = Math.max(...filter);
    let index = filter.indexOf(maxAge);
    return arr[index];
};

// Do not edit below this line
module.exports = findTheOldest;
