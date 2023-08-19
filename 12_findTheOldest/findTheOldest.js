const findTheOldest = function (peopleArray) {
    return peopleArray.reduce((oldestPerson, person) => {
        const ageOfOldestPerson = getAge(oldestPerson);
        const ageOfPerson = getAge(person);
        return ageOfOldestPerson > ageOfPerson ? oldestPerson : person;
    }, {});
};

function getAge(person) {
    let birth = person.yearOfBirth;
    let death = person.yearOfDeath;
    if (!birth) birth = new Date().getFullYear(); // If birth is undefined
    if (!death) death = new Date().getFullYear(); // If date of death is undefined
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
