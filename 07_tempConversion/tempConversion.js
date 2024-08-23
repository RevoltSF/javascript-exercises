const convertToCelsius = function(degree) {
  let celcius = (degree - 32) * (5/9);
  celcius = Math.round(celcius * 10) / 10
  return celcius;
};

const convertToFahrenheit = function(degree) {
  let Fahrenheit = (degree * (9/5)) + 32;
  Fahrenheit = Math.round(Fahrenheit * 10) / 10;
  return Fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
