function VeryImportantFunction() {
  console.log('Very important function');
}

function NotSoImportantFunction() {
  console.log('Not so important function');
}


function run() {
  VeryImportantFunction();
  NotSoImportantFunction();
}

const PI = Math.PI;

module.exports = {
  run,
  VeryImportantFunction,
  NotSoImportantFunction,
  PI
}