var seats = require('../seats.js');
function swapper(seats) {
  var final = [];
  for (var i = 0; i < seats.length; i++) {
    if ( i == seats.length - 1 ) {
      final[0] = seats[i];
    } else if (i === 1) {
      final[(seats.length - 2)] = seats[i];
    } else if ( i % 2 == 0) {
      final[ i + 2 ] = seats[i];
    } else {
      final[ i - 2 ] = seats[i];
    }
  }
  return final;
}
var reseating = swapper(seats);
console.log(reseating);