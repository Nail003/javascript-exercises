const fibonacci = function (index) {
    if (index < 0) return "OOPS";
    if (index === 0) return 0;

    prevValue = 0;
    nextValue = 1;

    for (i = 0; i < index - 1; i++) {
        [prevValue, nextValue] = [nextValue, prevValue + nextValue]; // Array Destructuring
    }

    return nextValue;
};

// Do not edit below this line
module.exports = fibonacci;
