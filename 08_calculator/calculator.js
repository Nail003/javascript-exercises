const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const sum = function (givenArray) {
    return givenArray.reduce((total, value) => total + value, 0);
};

const multiply = function (givenArray) {
    return givenArray.reduce(
        (total, value) => (total === 0 ? value : value * total),
        0
    );
};

const power = function (a, b) {
    return a ** b;
};

const factorial = function (value) {
    if (value === 0) return 1;
    let product = 1;
    for (let i = value; i > 0; i--) {
        product *= i;
    }
    return product;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
