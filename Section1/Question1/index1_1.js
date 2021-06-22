/*
Question 1

Assuming http://codequiz.azurewebsites.net/data returns an object {data: 10}. 
Below function doesn’t work correctly.

============================================================================================================
==function thisIsSyncFunction() {                                                                         ==
==    let result = 0;                                                                                     ==
==                                                                                                        ==
==    fetch('https://codequiz.azurewebsites.net/data').then(res => res.json()).then((response) => {       ==
==      result = response.data;                                                                           ==
==    });                                                                                                 ==
==    return result;                                                                                      ==
==}                                                                                                       ==
==                                                                                                        ==
==const number1 = thisIsSyncFunction()                                                                    ==
==const calculation = number1 * 10;                                                                       ==
==console.log(calculation);                                                                               ==
============================================================================================================

1.1 Please correct the code, so it really prints out the expected result (100). You can fix it anyway you like but it still has to call fetch as the source of data.
*/


const fetch = require('node-fetch')

async function thisIsSyncFunction() {
  let result = 0

  const response = await fetch('https://codequiz.azurewebsites.net/data')
  const data = await response.json()
  result = data.data

  return result
}

async function main() {
  const number1 = await thisIsSyncFunction()
  const calculation = number1 * 10
  console.log('calculation -> ',calculation)
}

main()
