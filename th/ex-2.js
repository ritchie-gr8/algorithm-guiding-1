const romanToInt = function (s) {
  // roman value look up object
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  // init sum value
  let sum = 0

  // get first value to check
  let prevVal = roman[s[0]]

  for (let i = 1; i < s.length; i++) {

    // get current value (next value after prev)
    let currVal = roman[s[i]]

    // if the current value is bigger than the previous value
    // add negative value to sum eg (CM =>  add -500 and then add 1000 so the result is 500)
    // else add positive value to sum
    if (currVal > prevVal) {
      sum += -prevVal
    } else {
      sum += prevVal
    }

    // change previous value to current value
    prevVal = currVal
  }

  // add last value to sum
  sum += prevVal

  return sum
};

const result1 = romanToInt("III"); // 3
console.log(result1);

const result2 = romanToInt("LVIII"); // 58
console.log(result2);

const result3 = romanToInt("MCMXCIV"); //1994
console.log(result3);
