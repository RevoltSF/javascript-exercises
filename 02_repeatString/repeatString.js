const repeatString = function(word, times) {
    let string = "";
    for (i = 0; i < times; i++) {
        string = string.concat(word);
    }
    if (times < 0) {
        string = "ERROR";
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
