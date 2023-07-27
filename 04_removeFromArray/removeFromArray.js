const removeFromArray = function (array, ...removeItemArgs) {
    return array.filter((item) => !removeItemArgs.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
