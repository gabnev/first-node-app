
const url = 'www.example.com'

function log(message) {
  console.log(message);
}

module.exports.log = log;
module.exports.endPoint = url; //we can decide the exports name

// IF you just want to export a single function:
// module.exports = log;