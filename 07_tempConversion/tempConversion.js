const convertToCelsius = function(x) {

let y = Math.round(((x - 32) * 0.5556) * 10)/10;
return y;


};

const convertToFahrenheit = function(x) {

  let y = Math.round((x * 1.8 + 32)*10) / 10;
return y

};




// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
