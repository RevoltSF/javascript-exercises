const sumAll = function(start, end) {
    let sum = 0;
    if (!Number.isInteger(start) || !Number.isInteger(end)) {
        return "ERROR";
    }
    if ((start < 0) || end < 0) {
        return "ERROR";
    }
    if (start < end) {
        for (i = start; i <= end; i++) {
            sum += i;
        }
    } else if (start > end) {
        for (i = start; i >= end; i--) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
