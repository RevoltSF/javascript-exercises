const removeFromArray = function(Array, ...target) {
    const filteredArray = [];
    Array.forEach(item => {
        if (!target.includes(item)) {
            filteredArray.push(item);
        }
    });
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
