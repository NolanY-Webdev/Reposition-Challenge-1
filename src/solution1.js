var seats = require('../seats.js')


function swapper(seats) {
  var evensReversed = [];
  var oddsReversed = [];
  for (var i = 0; i < seats.length; i++) {
    if ( i % 2 == 0) {
      evensReversed.unshift(seats[i]);
    } else {
      oddsReversed.unshift(seats[i]);
    }
  }
  var final = evensReversed.concat(oddsReversed);
  return final;
};

var reseating = swapper(seats);
console.log(reseating);
