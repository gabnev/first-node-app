// MODULE WRAPPER FUNCTION
// Node converts the module to a function (js iife) to execute the code

(function (exports, require, module, _filename, _dirname) {

  console.log(_filename);
  console.log(_dirname);

  const url = "www.example.com"

  function log(message) {
    console.log(message);
  }

  // Many ways to export:
  // module.exports = log;
  // module.exports.log = log;
  exports.log = log

  // WRONG: exports = log; exports is referece to module.exports, can't omit module.
}) 