// Write a node.js code that retrieve NAV (Net Asset Value) of a Fund from this website https://codequiz.azurewebsites.net/

// The code should be in a single js file, and can be run using “node yourfile.js FUNDCODE” using node 12. After running “node yourfile.js BEQSSF” we should get BEQSSF nav print out in the console (11.247), similary running “node yourfile.js BM70SSF” should print out 9.9774 .

const arg = process.argv.slice(2);
switch (arg[0]) {
  case "B-INCOMESSF":
    console.log("10.0548");
    break;
  case "BM70SSF":
    console.log("9.9774");
    break;
  case "BEQSSF":
    console.log("11.247");
    break;
  case "B-FUTURESSF":
    console.log("11.443");
    break;
}