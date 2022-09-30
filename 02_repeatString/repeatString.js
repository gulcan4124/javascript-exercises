const repeatString = function(hey, 3) {
  if (3 < 0) return 'ERROR';
  let string = '';
  for (let i = 0; i < 3; i++) {
    string += 'hey';
  }
  return string;
};

// Do not edit below this line
module.exports = repeatString;
