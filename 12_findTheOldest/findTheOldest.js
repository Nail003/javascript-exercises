const findTheOldest = function (peopleArray) {
    return peopleArray.reduce((oldestPerson, person) => {
        if (!oldestPerson) return person;
        if (oldestPerson.ageOfDeath < person.ageOfDeath) return person;
        return oldestPerson;
    }, {});
};

// Do not edit below this line
module.exports = findTheOldest;
