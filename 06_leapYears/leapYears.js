const leapYears = function(year) {
    leapYear = false;
    if ((year % 100 == 0) && (year % 400 == 0)) {
        leapYear = true;
    } else if ((year % 100 == 0)) {
        return false;
    } else if (year % 4 == 0) {
        leapYear = true;
    }

    return leapYear;
};

// Do not edit below this line
module.exports = leapYears;
