/*
1.2 Is there a way to make thisIsSyncFunction really synchronous, so number1 has the value 10 before it is used for the calculation on the next line.
*/

function thisIsSyncFunction() {
  return 10;
}

const number1 = thisIsSyncFunction()
const calculation = number1 * 10;
console.log(calculation);


// const fetch = require('node-fetch')

// fetch('https://codequiz.azurewebsites.net/data').then(res => res.json()).then(json => {
//   const number1 = json.data
//   const calculation = number1 * 10
//   console.log('calculation -> ',calculation)
// })
