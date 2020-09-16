const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {
var a = parseInt(userInput[0]);
 var b = parseInt(userInput[1]);
 var c=parseInt(userInput[2]);
function max_of_three(x, y, z) 
 {
  max_val = 0;
  if (a > b)
  {
    max_val = a;
  } else
  {
    max_val = b;
  }
  if (c > max_val) 
  {
    max_val = c;
  }
  return max_val;
}

console.log(max_of_three(userInput[0],userInput[1],userInput[3]))
 
});
