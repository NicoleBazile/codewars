// String repeat
// Write a function called repeatString which repeats the given string src exactly count times.

function repeatStr (n, s) {
  let result = '';
  for(let i = 1; i <= n; i += 1) {
    result += s;
  }
  return result;
}
