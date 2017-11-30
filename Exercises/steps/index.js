// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Short and simple solution
function steps(n) {
  for (let i = 1; i <= n; i++) {
    console.log(`${'#'.repeat(i)}${' '.repeat(n - i)}`);
  }
}

// Language-independent iterative
/* function steps(n) {
  for (let i = 1; i <= n; i++) {
    let str = ''
    for (let j = 0; j < i; j++) {
      str += '#'
    }
    for (let c = 0; c < n - i; c++) {
      str += ' '
    }
    console.log(str);
  }
} */

module.exports = steps;
