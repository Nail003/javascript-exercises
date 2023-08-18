const palindromes = function (givenString) {
    const trimmedString = givenString.toLowerCase().replace(/[^a-z0-9]/g, "");
    return trimmedString.split("").reverse().join("") === trimmedString;
};

// Do not edit below this line
module.exports = palindromes;
